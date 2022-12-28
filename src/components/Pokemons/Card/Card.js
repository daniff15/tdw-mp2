import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FrontPage from "./FrontPage/FrontPage";
import BackPage from "./BackPage/BackPage";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Linka } from "../../../Globals";
import noimage from "../../../images/noimage.png";

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: black;
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  width: 150px;
  height: 150px;
  z-index: 1;
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #d7f2e8;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function Card({ pokemonNumber }) {
  const [view, setView] = useState(true);
  const pokemon = useSelector((state) => state.pokemonDetail[pokemonNumber]);

  if (pokemon === undefined) {
    return (
      <CardContainer>
        <CardInfo></CardInfo>
      </CardContainer>
    );
  } else {
    var image = document.getElementById(pokemon.id);
    if (image !== null) {
      image.src = pokemon.sprites.front_default;
      if (pokemon.sprites.front_default === null) {
        image.src = noimage;
      }
    }
  }

  return (
    <CardContainer>
      <Linka to={`/pokedex/${pokemon.id}`}>
        {pokemon.sprites.front_default === null ? (
          <CardImage alt={pokemon.name} id={pokemon.id} src={noimage} />
        ) : (
          <CardImage
            alt={pokemon.name}
            id={pokemon.id}
            src={pokemon.sprites.front_default}
          />
        )}
      </Linka>
      <CardInfo>
        <AiOutlineLeft
          onClick={() => setView(!view)}
          style={{
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
        <Linka to={`/pokedex/${pokemon.id}`}>
          {view ? (
            <FrontPage pokemon={pokemon} />
          ) : (
            <BackPage pokemon={pokemon} />
          )}
        </Linka>
        <AiOutlineRight
          onClick={() => setView(!view)}
          style={{
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
