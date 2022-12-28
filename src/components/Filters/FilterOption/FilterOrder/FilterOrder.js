import React from "react";
import { useDispatch } from "react-redux";
import { ContainerRow, FilterPicked, Option } from "../../../../Globals";
import { getPokemonByOrder, setPagination } from "../../../../store/actions";

function FilterOrder() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const order = e.target.value[e.target.value.length - 1];
    const attribute = e.target.value.slice(0, -1);
    if (order === "-") {
      dispatch(getPokemonByOrder("asc", attribute));
    } else {
      dispatch(getPokemonByOrder("desc", attribute));
    }
    dispatch(setPagination(1));
    dispatch({ type: "SET_ORDER", payload: e.target.value });
  };

  return (
    <ContainerRow>
      <p style={{ marginRight: "20px", marginLeft: "10px" }}>Pokemon Order</p>
      <FilterPicked onChange={handleChange}>
        <Option value="id-">ID-</Option>
        <Option value="id+">ID+</Option>
        <Option value="name-">A-Z</Option>
        <Option value="name+">Z-A</Option>
        <Option value="height-">Height-</Option>
        <Option value="height+">Height+</Option>
        <Option value="weight-">Weight-</Option>
        <Option value="weight+">Weight+</Option>
      </FilterPicked>
    </ContainerRow>
  );
}

export default FilterOrder;
