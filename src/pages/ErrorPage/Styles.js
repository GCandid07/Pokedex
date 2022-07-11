import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 15em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1, h2 {
    font-family: fantasy, cursive, sans-serif;
    font-weight: 200;
    text-align: center;
    font-size: 3em;
  }
  img {
    width: 100%;
  }
`;
