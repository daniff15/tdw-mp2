import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContainerRow } from "../../Globals";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
`;

const ErrorContainer = styled.div`
  height: 80%;
  width: 80%;
  text-align: center;
  h1 {
    font-size: 10rem;
    margin: 0;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: #f5d8d8;
  }
`;

function Error() {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <Container>
      <ErrorContainer>
        <ContainerRow>
          <h1>4</h1>
          <Image
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png"
            alt="voltorb"
          />
          <h1>4</h1>
        </ContainerRow>
        <h2>Something went wrong...</h2>
      </ErrorContainer>
      <ButtonLink to="/">Back Home</ButtonLink>
    </Container>
  );
}

export default Error;
