import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7em;
  border-top: 1px solid #FFF;
  background: linear-gradient(10deg, rgba(0,0,0,1) 0%, rgba(176,176,176,1) 100%);
  color: #FFF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;;
  text-align: center;
  ul{
    list-style-type: none;
  }
`;

export const PokeContent = styled.div`
  width: 40%;
`;

export const OfficialSite = styled.div`
  width: 20%;
  border-right: 1px solid #FFF;
  border-left: 1px solid #FFF;
  display: flex;
  flex-direction: column;
  gap: .5em;
  a {
    color: #FFF;
  }
`;

export const HostContent = styled(PokeContent)``;

export const SocialMedias = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: .5em;
`;

export const Icons = styled.img`
  max-width: 1.8em;
`;
