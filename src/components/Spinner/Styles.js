import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  0%,100% {
    transform: rotate(-10deg) translateX(-25px);
  }
  50% {
    transform: rotate(10deg) translateX(25px);
  }
`;

export const ContainerLoading = styled.div`
  width: 200px;
  height: calc(100vh - 15em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  animation: ${Rotate} 3s cubic-bezier(0.50, 0.55, 0.3, 1.55) infinite;
`;
