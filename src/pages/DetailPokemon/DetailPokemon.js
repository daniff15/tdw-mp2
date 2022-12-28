import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Error from "../../components/Error/Error";
import { getPokemonDetailByUrl } from "../../store/actions";
import BaseStats from "../../components/Details/BaseStats/BaseStats";
import Evolution from "../../components/Details/Evolution/Evolution";
import MainInfo from "../../components/Details/MainInfo/MainInfo";
import { Linka } from "../../Globals";
import { IoMdArrowRoundBack } from "react-icons/io";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const BackButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 10px #000;
    outline: none;
  }
`;

function DetailPokemon() {
  const { id } = useParams();
  const pokemon = useSelector((state) => state.pokemonDetail[id]);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  if (pokemon === undefined) {
    dispatch(getPokemonDetailByUrl("https://pokeapi.co/api/v2/pokemon/" + id));
    if (error) {
      return <Error />;
    }
    return;
  } else {
    document.title =
      pokemon.name.charAt(0).toUpperCase() +
      pokemon.name.slice(1) +
      " | " +
      pokemon.id;
  }

  return (
    <Container>
      <Linka to="/pokedex">
        <BackButton>
          <IoMdArrowRoundBack />
          Back
        </BackButton>
      </Linka>
      <MainInfo pokemon={pokemon} />
      {pokemon.sprites.front_default !== null && (
        <Evolution
          chain_of_evolution={pokemon.chain_of_evolution}
          info={pokemon}
        />
      )}
      <BaseStats stats={pokemon.stats} />
    </Container>
  );
}

export default DetailPokemon;
