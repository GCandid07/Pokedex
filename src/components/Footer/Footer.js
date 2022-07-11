import { Container, PokeContent, OfficialSite, HostContent, SocialMedias, Icons } from "./Styles"
import Linkedin from "../../assets/Linkedin.png"
import Youtube from "../../assets/Youtube.png"
import Twitter from "../../assets/Twitter.png"
import Instagram from "../../assets/Instagram.png"
import Facebook from "../../assets/Facebook.png"
import Github from "../../assets/Github.png"

export const Footer = () => {
  return (
    <Container>
      <PokeContent>
        <SocialMedias>
          <li>
            <a href="https://www.facebook.com/Pokemon/" target="_blank" rel="external">
              <Icons src={Facebook} alt="Ícone que ao clicar redireciona para o Facebook Oficial do Pokémon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pokemon/" target="_blank" rel="external">
              <Icons src={Instagram} alt="Ícone que ao clicar redireciona para o Instagram Oficial do Pokémon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/PokemonOficialPT" target="_blank" rel="external">
              <Icons src={Youtube} alt="Ícone que ao clicar redireciona para o canal Oficial do Pokémon no Youtube" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/pokemon" target="_blank" rel="external">
              <Icons src={Twitter} alt="Ícone que ao clicar redireciona para o Twitter Oficial do Pokémon" />
            </a>
          </li>
        </SocialMedias>
        <ul>
          <li>
            &copy; Pokémon
          </li>
        </ul>
      </PokeContent>
      <OfficialSite>
        <p>Saiba mais: </p>
        <a href="https://www.pokemon.com/br/" target="_blank" rel="external"> Site Oficial</a>
      </OfficialSite>
      <HostContent>
        <SocialMedias>
          <li>
            <a href="https://www.linkedin.com/in/gabriel-c%C3%A2ndido-9998a2219/" target="_blank" rel="author">
              <Icons src={Linkedin} alt="Ícone que ao clicar redireciona para o Linkedin do criador da página" />
            </a>
          </li>
          <li>
            <a href="https://github.com/GCandid07" target="_blank" rel="author">
              <Icons src={Github} alt="Ícone que ao clicar redireciona para o GitHub do criador da página" />
            </a>
          </li>
        </SocialMedias>
        <ul>
          <li>
            &copy; Gabriel Cândido
          </li>
        </ul>
      </HostContent>
    </Container>
  )
}
