import React from "react";
import styled from "styled-components";
import { Linka } from "../../Globals";

const Container = styled.div`
  height: 100px;
  background-color: #79caf9;
  border-bottom: 1px solid #000;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

function Navbar() {
  return (
    <Container>
      <Links>
        <Linka to="about">About</Linka>
        <Linka to="pokedex">Pokedex</Linka>
      </Links>
    </Container>
  );
}

export default Navbar;
