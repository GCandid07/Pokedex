import styled from "styled-components";
import Fundo from "../../assets/Fundo.jpg"

export const Container = styled.div`
  max-width: 1024px;
  min-height: calc(100vh - 21em);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-top: 3em;
  margin-bottom: 3em;
  overflow-x: hidden;
`;

export const Card = styled.div`
  width: 240px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: cursive;
  span {
    width: 100%;
    padding: .5em 1em;
    text-align: left;
    font-size: 1.5em;
    color: #FFF;
    text-shadow: 1px 1px 1px #000c;
  }
  img {
    max-width: 10em;
    transition: .3s linear;
    cursor: pointer;
    text-align: center;
    &:hover {
      transform: scale(1.1)
    }
  }
  h2 {
    color: #FFF;
    text-shadow: 1px 1px 5px #000;
    text-align: center;
    padding-bottom: .5em;
  }
  p {
    margin: .5em auto;
    border: 1px solid #FFF;
    border-radius: 21px;
    padding: .3em 1em;
    box-shadow: 1px 1px 10px 1px #ddd;
    cursor: pointer;
    transition: .3s linear;
    color: #FF0;
    background-color: #00000099;
    &:hover {
      background-color: #FFF;
      color: #000;
      border: 1px solid #000;
    }
  }
  @media screen and (max-width: 600px){
    width: 45%;
    h2 {
      font-size: 1.2em;
    }
  }
`;

export const Types = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
  img{
    width: 100%;
  }
  @media screen and (max-width: 600px){
    img {
      width: 2em;
    }
  }
`;

export const Type = styled.div`
  width: 2.5em;
  position: relative;
  
  &:hover::after {
    ${({nameTypes}) => (`content: ${JSON.stringify(nameTypes)}`)};
    background-color: #000;
    color: #FFF;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px;
    transform: translateY(1.5em) translateX(-.5em);
    font-size: .8em;
    border-radius: 16px;
    width: 3em;
    text-align: center;
  }  
  @media screen and (max-width: 600px){
    width: 100%;
  }
`

export const ContainerPagination = styled.div`
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    list-style: none;
  }
  p {
    text-align: center;
  }
`;
