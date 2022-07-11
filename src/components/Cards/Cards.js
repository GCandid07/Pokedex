import Spinner from "../../components/Spinner/Spinner"
import usePokeData from "../../hooks/usePokeData"
import { url_img, type_img } from "../../constants/constants"
import { Container, Card, Types, Type, ContainerPagination } from "./Styles"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Pagination } from "../../components/Pagination/Pagination"

const LIMIT = 20;

export const Cards = () => {

  const [pokedex, setPokedex] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();
  const { data, isLoading, total } = usePokeData(LIMIT, offset);

  data.sort((previous, next) => {
    return previous.id - next.id
  });

  const pokemonCatch = (poke) => {
    const inPokedex = pokedex.find(pokemon => pokemon.name === poke.name)
    inPokedex 
      ? alert(`${poke.name[0].toUpperCase() + poke.name.slice(1)} já está em sua pokedex`) 
      : setPokedex([...pokedex, poke])
  }

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('pokedex'))
    local !== null && local.length > 0 && setPokedex(local)
  }, [])

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }, [pokedex])

  return (
    <Container>
      {isLoading 
        ? (<Spinner/>) 
        : data && data.map(poke => (
          <Card key={poke.id}>
            <span> #{('00' + poke.id).slice(-5)} </span>
            <img 
              src={`${url_img + poke.id}.png`}
              alt={`Imagem ilustrativa do pokemon ${poke.name}`}
              onClick={() => navigate(`/pokemon/${poke.id}`)}
            />
            <h2>{poke.name[0].toUpperCase() + poke.name.slice(1)}</h2>
            <Types>
              {poke.types.map((type, i) => (
                <Type key={i} nameTypes={type.type.name}>
                  <img 
                    src={type_img[type.type.name]}
                    alt={`Tipo ${type.type.name}`}
                  />
                </Type>
                ))}
            </Types>
            <p onClick={() => pokemonCatch(poke)}>Capturar</p>
          </Card>
        ))}
        <ContainerPagination>
          {!isLoading && (
          <Pagination 
            limit={LIMIT}
            total={total}
            offset={offset}
            setOffset={setOffset}
          />
        )}
        </ContainerPagination>        
    </Container>
  )
}
