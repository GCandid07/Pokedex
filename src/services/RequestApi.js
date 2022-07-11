import axios from "axios";
import { base_url } from "../constants/constants"

export const getPokemonName = async (limit, offset) => {
  try {
    const { data } = await axios.get(`${base_url}?limit=${limit}&offset=${offset}`)
    return data && data
  } catch (err){
    alert(err.response)
  }
}

export const getDetail = async (id) => {
  try {
    const { data } = await axios.get(`${base_url + id}`)
    return data && data
  } catch (err) {
    console.log(err.response)
  }
}
