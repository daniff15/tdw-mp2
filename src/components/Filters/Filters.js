import React, { useEffect } from "react";
import styled from "styled-components";
import FilterPicker from "./FilterPicker/FilterPicker";
import Searchbar from "./FilterOption/Searchbar/Searchbar";
import FilterType from "./FilterOption/FilterType/FilterType";
import FilterOrder from "./FilterOption/FilterOrder/FilterOrder";
import { useDispatch, useSelector } from "react-redux";
import { resetPokemons, setPagination } from "../../store/actions";
import { ContainerRow } from "../../Globals";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function Filters() {
  const filter = useSelector((state) => state.filter_picker);
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (filter === "get_all") {
      dispatch(setPagination(1));
      dispatch(resetPokemons(pokemons));
    }
  }, [filter, dispatch, pokemons]);

  return (
    <StyledFilters>
      <ContainerRow style={{ height: "100px" }}>
        <h4
          style={{
            marginRight: "20px",
            marginLeft: "10px",
            fontWeight: "600",
          }}
        >
          Choose the Filter:
        </h4>
        <FilterPicker />
      </ContainerRow>
      {filter === "search_name" && <Searchbar />}
      {filter === "search_id" && <Searchbar />}
      {filter === "type" && <FilterType />}
      {filter === "order" && <FilterOrder />}
    </StyledFilters>
  );
}

export default Filters;
