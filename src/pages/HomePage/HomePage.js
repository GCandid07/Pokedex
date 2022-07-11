import { Container } from "./Styles"
import { Cards } from "../../components/Cards/Cards"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Cards />
      <Footer />
    </Container>
  )
}

export default HomePage
