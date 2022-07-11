import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Pokedex } from '../../components/Pokedex/Pokedex';
import { Container } from "./Styles"

const PokedexPage = () => {

  return (
    <Container>
      <Header />
      <Pokedex />
      <Footer />
    </Container>
  )
}

export default PokedexPage;
