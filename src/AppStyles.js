import {createGlobalStyle} from "styled-components"
import container_bg from "./assets/container_bg.png"

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100vh;
    font-family: sans-serif;
    background: #666 url(${container_bg});
  }
`;
