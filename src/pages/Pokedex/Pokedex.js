import React from "react";
import Filters from "../../components/Filters/Filters";
import styled from "styled-components";
import Pokemons from "../../components/Pokemons/Pokemons";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function Pokedex() {
  const loading = useSelector((state) => state.loading);
  return (
    <Container>
      {!loading && <Filters />}
      <Pokemons />
    </Container>
  );
}

export default Pokedex;
