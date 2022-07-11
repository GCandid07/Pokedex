import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Types, Type, Título } from './Styles'
import { url_img, type_img } from "../../constants/constants"

export const Pokedex = () => {

  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    inStorage()
  }, [])

  const inStorage = () => {
    setPokemons(JSON.parse(localStorage.getItem('pokedex')))
  }

  const removesFromPokedex = (id) => {
    let newPokedex = []
    pokemons.map(pokemon => {
      if(pokemon.id !==id){
        newPokedex.push(pokemon)
        setPokemons(newPokedex)
        localStorage.setItem('pokedex', JSON.stringify(newPokedex))
      } else {
        newPokedex.length === 0 && localStorage.clear('pokedex')
        setPokemons(newPokedex)
      }
      return newPokedex
    })
  }

  pokemons && pokemons.sort((prev, next) => prev.id - next.id)

  return (
    <Container>
      {pokemons && pokemons.length !== 0
        ? pokemons && pokemons.map(poke => (
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
            <p onClick={() => removesFromPokedex(poke.id)}>Remover</p>
          </Card>
        ))
        : <Título>Ainda não há pokémons em sua pokédex ...</Título>
      }
    </Container>
  )
}
