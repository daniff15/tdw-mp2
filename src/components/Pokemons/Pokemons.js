import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ContainerColumn } from "../../Globals";
import { getAllPokemons, updateLoading } from "../../store/actions";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import Card from "./Card/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const LIMIT_PER_PAGE = 20;

function Pokemons() {
  const page = useSelector((state) => state.page);
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const filteredPokemons = useSelector((state) => state.filteredPokemons);
  const pokemonDetails = useSelector((state) => state.pokemonDetail);

  const getID = (pokemon) => {
    if (pokemon.url !== undefined) {
      const id = pokemon.url.split("/")[6];
      return id;
    } else {
      return pokemon.id;
    }
  };

  useEffect(() => {
    if (Object.keys(pokemons).length === 0) {
      dispatch(getAllPokemons());
    } else {
      const pokedexImage = "📕";
      document.title = `${pokedexImage} Pokedex`;

      dispatch(updateLoading(false));
    }
  }, [dispatch, pokemons]);

  return (
    <ContainerColumn>
      {loading ||
      (Object.keys(pokemonDetails).length === 0 &&
        pokemons.length !== 0 &&
        localStorage.getItem("pokemons") !== null) ? (
        <Loading />
      ) : (
        <>
          <Container>
            {filteredPokemons
              .slice((page - 1) * LIMIT_PER_PAGE, page * LIMIT_PER_PAGE)
              .map((pokemon) => (
                <Card key={getID(pokemon)} pokemonNumber={getID(pokemon)} />
              ))}
          </Container>
          <Pagination
            page={page}
            total={filteredPokemons.length}
            limit={LIMIT_PER_PAGE}
          />
        </>
      )}
    </ContainerColumn>
  );
}

export default Pokemons;
