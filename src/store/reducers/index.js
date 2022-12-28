import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL_BY_URL,
  GET_POKEMON_BY_TYPE,
  SET_TERM,
  SET_FILTER,
  SET_FILTER_PICKER,
  SET_ORDER,
  SET_PAGE,
  GET_POKEMON_BY_ORDER,
  SEARCH_POKEMON,
  SEARCH_POKEMON_ID,
  UPDATE_LOADING,
  SET_ERR,
  RESET_POKEMONS,
} from "../types";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  pokemonDetail: {},
  types: "",
  order: "",
  page: 1,
  loading: true,
  error: false,
  term: "",
  filter_picker: "get_all",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: [...action.payload],
        filteredPokemons: [...action.payload],
        loading: false,
      };
    case GET_POKEMON_DETAIL_BY_URL:
      return {
        ...state,
        pokemonDetail: {
          ...action.payload,
          ...state.pokemonDetail,
        },
        loading: false,
      };
    case SET_TERM:
      return {
        ...state,
        term: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        filteredPokemons: action.payload,
      };
    case SEARCH_POKEMON_ID:
      return {
        ...state,
        filteredPokemons: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_FILTER_PICKER:
      return {
        ...state,
        filter_picker: action.payload,
      };
    case GET_POKEMON_BY_TYPE:
      return {
        ...state,
        filteredPokemons: action.payload,
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case GET_POKEMON_BY_ORDER:
      return {
        ...state,
        filteredPokemons: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_POKEMONS:
      return {
        ...state,
        filteredPokemons: action.payload,
      };

    default:
      return state;
  }
}
