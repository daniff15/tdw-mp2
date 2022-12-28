import React from "react";
import styled from "styled-components";
import { Container, ContainerColumn } from "../../Globals";

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  margin: 0;
`;

const H4 = styled.h4`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 10px;
`;

function Loading() {
  return (
    <Container>
      <ContainerColumn>
        <H3>Catching Pokemons...</H3>
        <H4>Gotta catch them all!</H4>
      </ContainerColumn>
      <img
        src={require("../../images/loading.gif")}
        alt="LOADING....."
        width={300}
        height={300}
      />
      <img
        src={require("../../images/loading2.gif")}
        alt="LOADING....."
        width={75}
        height={75}
      />
    </Container>
  );
}

export default Loading;
