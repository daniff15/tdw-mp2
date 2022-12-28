import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterPicked, Option } from "../../../Globals";
import { setFilterPicker } from "../../../store/actions";

function FilterPicker() {
  const dispatch = useDispatch();
  const filterPicked = useSelector((state) => state.filter_picker);

  const handleChange = (e) => {
    dispatch(setFilterPicker(e.target.value));
  };

  return (
    <FilterPicked value={filterPicked} onChange={handleChange}>
      <Option value="get_all">Get all Pokemons</Option>
      <Option value="search_name">Search by Name</Option>
      <Option value="search_id">Search by ID</Option>
      <Option value="type">Type</Option>
      <Option value="order">Order</Option>
    </FilterPicked>
  );
}

export default FilterPicker;
