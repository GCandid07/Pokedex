import { useEffect, useState } from "react"
import { getPokemonName } from "../services/RequestApi"
import axios from "axios"

const usePokeData = (limit, offset) => {
  useEffect(() => {
    handleGetPokeName()
  }, [offset])

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)
  
  const handleGetPokeName = async () => {
    const response = await getPokemonName(limit, offset)
    setTotal(response && response.count)
    const pokeUrl = response.results.map((poke) => poke.url)
    let result = []
    for (const url of pokeUrl) {
      setIsLoading(true)
      axios.get(url)
      .then((response) => {
        result.push(response.data)
        setData(result)
      }).catch((err) => alert(err.response))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
        clearTimeout()
      })
    }
  }
  
  return {data, isLoading, total}
}

export default usePokeData;
