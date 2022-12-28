import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { Container, ContainerRow } from "../../../Globals";

const EvolutionChainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05rem;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const EvolutionCard = styled(Link)`
  text-align: center;
  width: 150px;
  height: 200px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const EvolutionImage = styled.img`
  width: 150px;
  height: 150px;
`;

const EvolutionName = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

const MultiStage = styled.div`
  width: 80%;
`;

function Evolution({ chain_of_evolution, info }) {
  const getEvolution = (chain_of_evolution) => {
    const data = chain_of_evolution;

    const getName = (name) =>
      name
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

    const getId = (uri) => {
      let uriArray = uri.split("/");
      const number = Number(uriArray[uriArray.length - 2]);
      return number;
    };

    const populateEvolutions = (chain) => {
      if (!chain.evolves_to) return;
      else
        return {
          name: getName(chain.species.name),
          id: getId(chain.species.url),
          isBaby: chain.is_baby,
          hasEvolved: true,

          evolvesTo: [
            ...chain.evolves_to.map((evolution) =>
              populateEvolutions(evolution)
            ),
          ],
        };
    };

    const chain = {
      name: getName(data.species.name),
      id: getId(data.species.url),
      isBaby: data.is_baby,
      hasEvolved: false,

      evolvesTo: [...data.evolves_to.map((evo) => populateEvolutions(evo))],
    };

    return chain;
  };

  let evolution = {};

  if (Object.keys(chain_of_evolution).length !== 0) {
    evolution = getEvolution(chain_of_evolution);
  }

  const EvolutionChain = ({ chain, color }) => {
    return (
      <>
        <EvolutionCard to={`/pokedex/${chain.id}`}>
          <EvolutionImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${chain.id}.png`}
            alt={chain.name}
          />
          <EvolutionName>{chain.name}</EvolutionName>
        </EvolutionCard>
        {chain.evolvesTo.length <= 2 && (
          <div style={{ marginLeft: "2rem" }}>
            {chain.evolvesTo.map((next) => (
              <EvolutionChain key={next.id} chain={next} color={color} />
            ))}
          </div>
        )}
        {chain.evolvesTo.length > 2 && (
          <ContainerRow>
            <MultiEvolution color={color} chain={chain} />
          </ContainerRow>
        )}
      </>
    );
  };

  const MultiEvolution = ({ chain, color }) => {
    return (
      <>
        <BsChevronRight color={color} />

        <MultiStage>
          {chain.evolvesTo.map((next) => (
            <EvolutionCard to={`/pokedex/${next.id}`}>
              <EvolutionImage
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${next.id}.png`}
                alt={next.name}
              />
              <EvolutionName>{next.name}</EvolutionName>
            </EvolutionCard>
          ))}
        </MultiStage>
      </>
    );
  };

  return (
    <Container>
      <h2 style={{ marginLeft: "40px" }}>Evolution Chain</h2>
      {Object.keys(evolution).length !== 0 ? (
        <>
          {evolution.evolvesTo.length === 0 ? (
            <EvolutionChainContainer>
              <EvolutionCard to={`/pokedex/${evolution.id}`}>
                <EvolutionImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.id}.png`}
                  alt={evolution.name}
                />
                <EvolutionName>{evolution.name}</EvolutionName>
              </EvolutionCard>
            </EvolutionChainContainer>
          ) : (
            <EvolutionChainContainer>
              <EvolutionChain chain={evolution} color="#000" />
            </EvolutionChainContainer>
          )}
        </>
      ) : (
        <EvolutionChainContainer>
          <EvolutionCard to={`/pokedex/${info.id}`}>
            <EvolutionImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`}
              alt={info.name}
            />
            <EvolutionName>{info.name}</EvolutionName>
          </EvolutionCard>
        </EvolutionChainContainer>
      )}
    </Container>
  );
}

export default Evolution;
