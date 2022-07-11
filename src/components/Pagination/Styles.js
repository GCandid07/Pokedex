import styled from "styled-components";

export const BTN = styled.button`
  padding: .5em;
  font-family: cursive;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  ${({bg}) => (`background-color: ${(bg && bg)}`)};
  &:focus{
    outline: none;
  }
`;
