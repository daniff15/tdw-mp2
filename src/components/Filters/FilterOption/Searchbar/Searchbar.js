import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ContainerRow } from "../../../../Globals";
import {
  searchPokemon,
  searchPokemonId,
  setPagination,
} from "../../../../store/actions";

const InputSearch = styled.input`
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

function Searchbar() {
  const dispatch = useDispatch();
  const filterPicker = useSelector((state) => state.filter_picker);
  const handleChange = (e) => {
    dispatch(setPagination(1));
    if (filterPicker === "search_id") {
      dispatch(searchPokemonId(e.target.value));
    } else {
      dispatch(searchPokemon(e.target.value.toLowerCase()));
    }
    dispatch({ type: "SET_TERM", payload: e.target.value });
  };

  return (
    <>
      <ContainerRow>
        <p
          style={{
            marginRight: "20px",
            marginLeft: "10px",
          }}
        >
          Search Pokemon:
        </p>
        <InputSearch placeholder="Search" onChange={handleChange} />
      </ContainerRow>
    </>
  );
}

export default Searchbar;
