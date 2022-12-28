import React from "react";
import styled from "styled-components";
import { Types, Type } from "../../../../Globals";

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  width: 150px;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
`;

function FrontPage({ pokemon }) {
  return (
    <Container>
      <MainInfo>
        <p>#{pokemon.id}</p>
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      </MainInfo>
      <Types>
        {pokemon.types.map((type) => (
          <Type key={type.type.name} type={type.type.name}>
            {type.type.name}
          </Type>
        ))}
      </Types>
    </Container>
  );
}

export default FrontPage;
