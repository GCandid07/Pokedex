import { Container } from "./Styles"
import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import { Details } from "../../components/Details/Details"

const DetailsPage = () => {

  return (
    <Container>
      <Header />
      <Details />
      <Footer />
    </Container>
  )
}

export default DetailsPage
