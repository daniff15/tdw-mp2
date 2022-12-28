import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Types, Type, Linka, ContainerColumn } from "../../../Globals";
import {
  getPokemonByType,
  setFilter,
  setFilterPicker,
} from "../../../store/actions";
import noimage from "../../../images/noimage.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      transition: 1s;
      width: 300px;
      height: 300px;
    }
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
    }
  }
`;

function MainInfo({ pokemon }) {
  useEffect(() => {
    var image = document.getElementById(pokemon.id);
    image.src = pokemon.sprites.front_default;
    if (pokemon.sprites.front_default === null) {
      image.src = noimage;
    }
  }, [pokemon]);

  const dispatch = useDispatch();

  const getType = (e) => {
    dispatch(setFilterPicker("type"));
    dispatch(setFilter(e.target.innerText.toLowerCase()));
    dispatch(getPokemonByType(e.target.innerText.toLowerCase()));
  };

  return (
    <Container>
      <Information>
        <h3>#{pokemon.id}</h3>
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <Types>
          {pokemon.types.map((type) => (
            <Linka key={type.type.name} to="/pokedex" onClick={getType}>
              <Type key={type.type.name} type={type.type.name}>
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </Type>
            </Linka>
          ))}
        </Types>
        <BoardInfo>
          <div>
            <h3>Height</h3>
            <p>{pokemon.height / 10} m</p>
          </div>
          <div>
            <h3>Weight</h3>
            <p>{pokemon.weight / 10} kg</p>
          </div>
          <div>
            <h3>Abilities</h3>
            <p>
              {pokemon.abilities
                .filter((ability) => ability.is_hidden === false)
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
          </div>
        </BoardInfo>
      </Information>
      {pokemon.sprites.front_default === null ? (
        <ContainerColumn>
          <Image
            height={300}
            width={300}
            src={noimage}
            alt={pokemon.name}
            id={pokemon.id}
          />
          <h4>This Pokemon don't have an image associated.</h4>
        </ContainerColumn>
      ) : (
        <Image
          height={400}
          width={400}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          id={pokemon.id}
        />
      )}
    </Container>
  );
}

export default MainInfo;
