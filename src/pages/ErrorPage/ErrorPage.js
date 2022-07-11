import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Container } from "./Styles"
import Error from "../../assets/Error.gif"

const ErrorPage = () => {
  return (
    <div>
      <Header/>
        <Container>
          <div>
            <h1>EROR 404</h1>
            <h2>Page Not Found</h2>
          </div>
          <div>
            <img src={Error} alt="" />
          </div>
        </Container>
      <Footer/>
    </div>
  )
}

export default ErrorPage
