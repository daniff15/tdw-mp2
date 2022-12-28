import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgPokemon } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, updateLoading } from "../../store/actions";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background: linear-gradient(
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.8) 100%
  );
`;

const ButtonLink = styled(Link)`
  margin-top: 40px;
  text-decoration: none;
  color: black;
  transition: 0.5s;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: red;
  }
  text-align: center;
`;

function About() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(pokemons).length === 0) {
      dispatch(getAllPokemons());
    } else {
      document.title = "About PokeAPP";

      dispatch(updateLoading(false));
    }
  }, [dispatch, pokemons]);

  return (
    <Container>
      <Informations>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          About the Project
        </h1>
        <p>
          Within the scope of the TDW curricular unit, we were proposed to carry
          out a project that consisted in the development of a front-end
          application in React to consume and visualize information from any
          public data source (PokeApi).
        </p>
        <p>
          The goals of this project aim to improve our abilities with React and
          the use of Redux.
        </p>
        <p>
          This project consists in having a Pokedex that shows all the pokemons
          and when clicking in a particular one we can see its details. Also in
          the Pokedex there are search (name, id and type) and order (name, id,
          height and weight) filters.
        </p>
        <p>
          A pipeline in Gitlab was also implemented in order to improve the
          workflow of the project and keep track if everything was doing fine.
        </p>
      </Informations>
      <ButtonLink to="/pokedex">
        <CgPokemon size="50px" />
        <p style={{ fontSize: "1.5rem" }}>Open Pokedex</p>
      </ButtonLink>
    </Container>
  );
}

export default About;
