import Logo_Pokemon from "../../assets/Logo_Pokemon.png"
import Pokedex from "../../assets/Pokedex.png"
import { Container, Icon } from "./Styles"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Icon onClick={() => navigate("/")} src={Logo_Pokemon} alt="Imagem logo Pokémon" />
      <Icon onClick={() => navigate("/pokedex")} src={Pokedex} alt={"Ícone de uma Pokédex"} />
    </Container>
  )
}
