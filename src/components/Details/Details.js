import Spinner from "../../components/Spinner/Spinner"
import arrow from "../../assets/arrow.svg"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { type_img, url_img } from "../../constants/constants"
import { getDetail } from "../../services/RequestApi"
import { useNavigate } from "react-router-dom"
import { 
  Container,
  Btns,
  ContainerDetails,
  PokeDetails,
  Pokemon,
  Type,
  Types,
  Status,
  Attribute,
  ContainerStatus,
  Stats
} from "./Styles"


export const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    handleGetDetails()
  }, [id])

  const [details, setDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const MAX_STATUS = 250
  const STATUS_PERCENT = MAX_STATUS / 100 

  const handleGetDetails = async() => {
    setIsLoading(true)
    setDetails(await getDetail(id))
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const alternate = (symbol) => {
    if (symbol === 'sum' && id >= 1 && id < 905 || symbol === 'sum' && id >= 10001 && id < 10154) {
      navigate(`/pokemon/${Number(id) + 1}`)
    } else if (symbol === 'sum' && id === '905') {
      navigate('/pokemon/10001')
    } else if (symbol === 'min' && id <= 905 && id > 1 || symbol === 'min' && id <= 10154 && id > 10001) {
      navigate(`/pokemon/${Number(id) - 1}`)
    } else if (symbol === 'min' && id === '10001') {
      navigate('/pokemon/905')
    }
  }

  return (
    <Container>
      {isLoading 
        ? (<Spinner/>)
        : (
          <ContainerDetails>
            <Btns>
              <img onClick={() => alternate('min')} src={arrow} alt="Ícone para retroceder o pokemon detalhado" />
              <h1>
                {details.name && details.name[0].toUpperCase() + details.name.slice(1)} N°{('00' + id).slice(-5)}
              </h1>
              <img onClick={() => alternate('sum')} src={arrow} alt="Ícone para avançar o pokemon detalhado" />
            </Btns>
            <PokeDetails>
              <Pokemon>
                <img src={`${url_img + id}.png`} alt={`Imagem ilustrativa do pokemon ${details.name}`} />
                <div>
                  <Types>
                    {details.types && details.types.map((type, i) => (
                      <Type key={i} nameTypes={type.type.name}>
                      <img 
                        src={type_img[type.type.name]}
                        alt={`Tipo ${type.type.name}`}
                      />
                    </Type>
                    ))}
                  </Types>
                </div>
              </Pokemon>
              <Status>
                <Attribute>
                  <ul>
                    <li>
                      <h3>Height</h3>
                      <p>{Number(details.height) / 10 } m</p>
                    </li>
                    <li>
                      <h3>Weight</h3>
                      <p>{Number(details.weight) / 10} kg</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3>Category</h3>
                      <p>{details.types && details.types[0].type.name[0].toUpperCase() + details.types[0].type.name.slice(1)}</p>
                    </li>
                    <li>
                      <h3>Abilities</h3>
                      <p>{details.abilities && details.abilities[0].ability.name[0].toUpperCase() + details.abilities[0].ability.name.slice(1)}</p>
                    </li>
                  </ul>
                </Attribute>
                <ContainerStatus>
                  {details.stats && details.stats.map((detail, i) => (
                    <Stats key={i} percent={Number(detail.base_stat) / STATUS_PERCENT} colorground={Number(detail.base_stat) / STATUS_PERCENT}>
                      <h3>{detail.stat.name[0].toUpperCase() + detail.stat.name.slice(1)}</h3>
                      <ul>
                        <li></li>
                        <p>{(Number(detail.base_stat) / STATUS_PERCENT).toFixed(1)}%</p>
                      </ul>
                    </Stats>
                  ))}
                </ContainerStatus>
              </Status>
            </PokeDetails>
          </ContainerDetails>
        )
      }
    </Container>
  )
}
