import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  width: 150px;
  margin-top: 35px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  p {
    font-weight: 400;
    margin: 0;
    }
span {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    }
    
    }
`;

function BackPage({ pokemon }) {
  return (
    <Container>
      <p>
        ID: <span>#{pokemon.id}</span>
      </p>
      <p>
        Name:{" "}
        <span>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </span>
      </p>
      <p>
        Height: <span>{pokemon.height / 10}m</span>
      </p>
      <p>
        Weight: <span>{pokemon.weight / 10}kg</span>
      </p>
    </Container>
  );
}

export default BackPage;
