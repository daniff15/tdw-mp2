import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Linka = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  margin: 0 20px;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FilterPicked = styled.select`
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  background-color: #fff;
  &:focus {
    box-shadow: 0 0 10px #000;
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: #fff;
  color: #000;
  font-size: 18px;
  font-weight: 300;
`;

export const Types = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  margin: 0 5px;
  background-color: ${(props) =>
    props.type === "grass"
      ? "#9AD87F"
      : props.type === "poison"
      ? "#BA80C9"
      : props.type === "fire"
      ? "#F9A77F"
      : props.type === "flying"
      ? "#A7C9F9"
      : props.type === "water"
      ? "#9AD8F9"
      : props.type === "bug"
      ? "#C9F9A7"
      : props.type === "normal"
      ? "#F9F9A7"
      : props.type === "electric"
      ? "#F9F97F"
      : props.type === "ground"
      ? "#F9D87F"
      : props.type === "fairy"
      ? "#F9A7D8"
      : props.type === "fighting"
      ? "#F97F7F"
      : props.type === "psychic"
      ? "#F97FF9"
      : props.type === "rock"
      ? "#D8D8D8"
      : props.type === "ice"
      ? "#A7F9F9"
      : props.type === "ghost"
      ? "#A7A7F9"
      : props.type === "dragon"
      ? "#A7A7F9"
      : props.type === "steel"
      ? "#D8D8D8"
      : props.type === "dark"
      ? "#A7A7A7"
      : "#F9F9F9"};
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
