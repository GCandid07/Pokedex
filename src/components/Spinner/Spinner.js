import { ContainerLoading, Loading } from "./Styles"
import pokeSpinner from "../../assets/pokeSpinner.svg"

const Spinner = () => {
  return (
    <ContainerLoading>
      <Loading src={pokeSpinner} alt="Carregando, em formato de pokebola"></Loading>
    </ContainerLoading>
  )
}

export default Spinner
