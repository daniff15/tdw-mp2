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
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

export const getAllPokemons = () => async (dispatch) => {
  try {
    dispatch(setErr(false));
    const localStorageList = localStorage.getItem("pokemons");
    let pokemons;
    if (localStorageList !== null) {
      pokemons = JSON.parse(localStorageList);
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: pokemons,
      });
    } else {
      const res = await axios.get(API_URL);
      for (let i = 0; i < res.data.results.length; i++) {
        const resDetail = await axios.get(res.data.results[i].url);
        res.data.results[i].types = resDetail.data.types;
        res.data.results[i].id = resDetail.data.id;
        res.data.results[i].height = resDetail.data.height;
        res.data.results[i].weight = resDetail.data.weight;
      }

      localStorage.setItem("pokemons", JSON.stringify(res.data.results));

      dispatch({
        type: GET_ALL_POKEMONS,
        payload: res.data.results,
      });
      pokemons = res.data.results;
    }
    pokemons.forEach((pokemon) => {
      dispatch(getPokemonDetailByUrl(pokemon.url));
    });
  } catch (error) {
    dispatch(setErr(true));
  }
};

export const getPokemonDetailByUrl = (url) => async (dispatch) => {
  try {
    const res = await axios.get(url);
    const key = res.data.id;

    let chain_of_evolution = {};

    if (key < 10000) {
      const resEvo = await axios.get(
        "https://pokeapi.co/api/v2/pokemon-species/" + key
      );

      if (resEvo.data.evolution_chain !== null) {
        const chain = resEvo.data.evolution_chain.url;
        const resChain = await axios.get(chain);
        const chainOfEvolution = resChain.data.chain;
        chain_of_evolution = chainOfEvolution;
      }
    }

    const data = {
      [key]: {
        name: res.data.name,
        id: res.data.id,
        types: res.data.types,
        sprites: {
          front_default:
            res.data.sprites.other["official-artwork"].front_default,
        },
        stats: res.data.stats,
        chain_of_evolution: chain_of_evolution,
        height: res.data.height,
        weight: res.data.weight,
        abilities: res.data.abilities,
      },
    };

    dispatch({
      type: GET_POKEMON_DETAIL_BY_URL,
      payload: data,
    });
  } catch (error) {
    dispatch(setErr(true));
    console.log(error);
  }
};

export const updateLoading = (val) => (dispatch) => {
  dispatch({
    type: UPDATE_LOADING,
    payload: val,
  });
};

export const setErr = (error) => (dispatch) => {
  dispatch({
    type: SET_ERR,
    payload: error,
  });
};

export const setTerm = (term) => (dispatch) => {
  dispatch({
    type: SET_TERM,
    payload: term,
  });
};

export const searchPokemon = (term) => async (dispatch) => {
  try {
    const res = localStorage.getItem("pokemons");
    const pokemons = JSON.parse(res);
    const searchedPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(term)
    );

    if (term === "") {
      dispatch({
        type: SEARCH_POKEMON,
        payload: pokemons,
      });
    } else {
      dispatch({
        type: SEARCH_POKEMON,
        payload: searchedPokemons,
      });
    }
  } catch (error) {
    dispatch(setErr(true));
    console.log(error);
  }
};

export const searchPokemonId = (term) => async (dispatch) => {
  try {
    const res = localStorage.getItem("pokemons");
    const pokemons = JSON.parse(res);
    const searchedPokemons = pokemons.filter((pokemon) =>
      pokemon.id.toString().includes(term)
    );

    if (term === "") {
      dispatch({
        type: SEARCH_POKEMON_ID,
        payload: pokemons,
      });
    } else {
      dispatch({
        type: SEARCH_POKEMON_ID,
        payload: searchedPokemons,
      });
    }
  } catch (error) {
    dispatch(setErr(true));
    console.log(error);
  }
};

export const setFilter = (filter) => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    payload: filter,
  });
};

export const setFilterPicker = (filter) => (dispatch) => {
  dispatch({
    type: SET_FILTER_PICKER,
    payload: filter,
  });
};

export const getPokemonByType = (type) => async (dispatch) => {
  try {
    const res = localStorage.getItem("pokemons");
    const pokemons = JSON.parse(res);

    if (type === "all") {
      dispatch({
        type: GET_POKEMON_BY_TYPE,
        payload: pokemons,
      });
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === type)
      );

      dispatch({
        type: GET_POKEMON_BY_TYPE,
        payload: filteredPokemons,
      });
    }
  } catch (error) {
    dispatch(setErr(true));
    console.log(error);
  }
};

export const setOrder = (order) => (dispatch) => {
  dispatch({
    type: SET_ORDER,
    payload: order,
  });
};

export const getPokemonByOrder = (order, attribute) => async (dispatch) => {
  try {
    const res = localStorage.getItem("pokemons");
    const pokemons = JSON.parse(res);

    if (attribute === "id") {
      pokemons.sort((a, b) => {
        if (order === "asc") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    } else if (attribute === "name") {
      pokemons.sort((a, b) => {
        if (order === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    } else if (attribute === "weight") {
      pokemons.sort((a, b) => {
        if (order === "asc") {
          if (a.weight === b.weight) {
            return a.height - b.height;
          } else {
            return a.weight - b.weight;
          }
        } else {
          if (a.weight === b.weight) {
            return a.height - b.height;
          } else {
            return b.weight - a.weight;
          }
        }
      });
    } else if (attribute === "height") {
      pokemons.sort((a, b) => {
        if (order === "asc") {
          if (a.height === b.height) {
            return a.weight - b.weight;
          } else {
            return a.height - b.height;
          }
        } else {
          if (a.height === b.height) {
            return b.weight - a.weight;
          } else {
            return b.height - a.height;
          }
        }
      });
    }

    dispatch({
      type: GET_POKEMON_BY_ORDER,
      payload: pokemons,
    });
  } catch (error) {
    dispatch(setErr(true));
    console.log(error);
  }
};

export const resetPokemons = (pokemons) => (dispatch) => {
  dispatch({
    type: RESET_POKEMONS,
    payload: pokemons,
  });
};

export const setPagination = (page) => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page,
  });
};
