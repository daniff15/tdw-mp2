import React from "react";
import styled from "styled-components";
import { Container } from "../../../Globals";

const ContainerStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  width: 75%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
    h3 {
      padding: 0 10px;
    }
  }
`;

function BaseStats({ stats }) {
  return (
    <Container>
      <h2 style={{ marginLeft: "40px" }}>Base Stats</h2>
      <ContainerStats>
        {stats.map((stat) => (
          <Stats key={stat.stat.name}>
            <h3>
              {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
            </h3>
            <h3>{stat.base_stat}</h3>
          </Stats>
        ))}
      </ContainerStats>
    </Container>
  );
}

export default BaseStats;
