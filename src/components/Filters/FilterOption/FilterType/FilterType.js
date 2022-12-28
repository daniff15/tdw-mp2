import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerRow, FilterPicked, Option } from "../../../../Globals";
import { getPokemonByType, setPagination } from "../../../../store/actions";

function FilterType() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setPagination(1));
    dispatch(getPokemonByType(e.target.value));
    dispatch({ type: "SET_FILTER", payload: e.target.value });
  };
  const filter = useSelector((state) => state.filter);

  return (
    <ContainerRow>
      <p style={{ marginRight: "20px", marginLeft: "10px" }}>Pokemon Type</p>
      <FilterPicked value={filter} onChange={handleChange}>
        <Option value="all">All</Option>
        <Option value="normal">Normal</Option>
        <Option value="fighting">Fighting</Option>
        <Option value="flying">Flying</Option>
        <Option value="poison">Poison</Option>
        <Option value="ground">Ground</Option>
        <Option value="rock">Rock</Option>
        <Option value="bug">Bug</Option>
        <Option value="ghost">Ghost</Option>
        <Option value="steel">Steel</Option>
        <Option value="fire">Fire</Option>
        <Option value="water">Water</Option>
        <Option value="grass">Grass</Option>
        <Option value="electric">Electric</Option>
        <Option value="psychic">Psychic</Option>
        <Option value="ice">Ice</Option>
        <Option value="dragon">Dragon</Option>
        <Option value="dark">Dark</Option>
        <Option value="fairy">Fairy</Option>
      </FilterPicked>
    </ContainerRow>
  );
}

export default FilterType;
