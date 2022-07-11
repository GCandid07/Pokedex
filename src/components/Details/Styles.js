import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 15em);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px){
    min-height: 100vh;
  }
`;

export const Btns = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
  h1 {
    text-align: center;
    color: #FFF;
    font-family: cursive, sans-serif;
    font-weight: 100;
    border-bottom: 1px solid #ccc; 
  }
  img {
    cursor: pointer;
  }
  img:nth-child(3) {
    transform: rotate(180deg)
  }
`;

export const ContainerDetails = styled.div`
  width: 100%;
  min-height: calc(100vh - 15em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const PokeDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Pokemon = styled.div`
  width: 50%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff40;
  border-radius: 10px;
  margin: 2em 0;
  padding: 1em;
  img {
    width: 50%;
    border-radius: 10px;
  }
  @media screen and (max-width: 600px){
    width: 90%;
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
  cursor: pointer;
  
  &:hover::after {
    ${({nameTypes}) => (`content: ${JSON.stringify(nameTypes)}`)};
    background-color: #000;
    color: #FFF;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px;
    transform: translateY(.5em) translateX(-.5em);
    font-size: .8em;
    border-radius: 16px;
    width: 3em;
    text-align: center;
  }  
  @media screen and (max-width: 600px){
    width: 100%;
  }
`

export const Status = styled.div`
  width: 50%;
  @media screen and (max-width: 600px){
    width: 90%;
  }
`;

export const Attribute = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFFB0;
  border-radius: 10px;
  ul {
    list-style-type: none;
  }
  li {
    padding: 1em;
    font-family: cursive, sans-serif;
    h3 {
      text-align: center;
      font-weight: 100;
      font-size: 1.5em;
      color: #FFF;
      text-shadow: 1px 1px 3px #000;
    }
    p {
      text-align: center;
      font-size: 1.7em;
    }
  }
`;

export const ContainerStatus = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  font-family: cursive, sans-serif;
  border-radius: 10px;
  background-color: #FFFFFFB0;
`;

export const Stats = styled.div`
  padding: .5em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  h3 {
    white-space: nowrap;
    width: 40%;
  }
  ul {
    width: 30%;
    list-style-type: none;
    background-color: #aaa;
    li {
      height: 100%;
      background-color: ${({colorground}) => (`hsl(${colorground}, 80%, 60%)`)};
      max-width: ${({percent}) => (`${percent}%`)};
    }
    p {
      position: absolute;
      top: 22%;
      margin-left: .2em;
    }
  }
`;
