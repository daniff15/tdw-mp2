import React from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setPagination } from "../../store/actions";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      box-shadow: 0 0 10px #000;
      outline: none;
    }
    &:active {
      transform: translateY(2px);
    }
  }
  .text {
    margin-left: 20px;
    margin-right: 20px;
  }
  margin-bottom: 75px;
`;

const Clickable = styled.div`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    box-shadow: 0 0 10px #000;
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
`;

function Pagination(props) {
  const max = Math.ceil(props.total / props.limit);
  const dispatch = useDispatch();

  return (
    <Container>
      {props.page > 1 && (
        <Clickable onClick={() => dispatch(setPagination(1))}>
          <BsChevronDoubleLeft size={30} />
        </Clickable>
      )}
      {props.page > 1 && (
        <Clickable onClick={() => dispatch(setPagination(props.page - 1))}>
          <BsChevronLeft size={30} />
        </Clickable>
      )}
      <span style={{ fontSize: 17 }}>
        <span style={{ fontWeight: "bold" }}>
          {props.total === 0 ? 0 : (props.page - 1) * props.limit + 1} to{" "}
          {props.page * props.limit > props.total
            ? props.total
            : props.page * props.limit}{" "}
        </span>
        ({props.total} Pokemons)
      </span>
      {props.page < max && (
        <Clickable onClick={() => dispatch(setPagination(props.page + 1))}>
          <BsChevronRight size={30} />
        </Clickable>
      )}
      {props.page < max && (
        <Clickable onClick={() => dispatch(setPagination(max))}>
          <BsChevronDoubleRight size={30} />
        </Clickable>
      )}
    </Container>
  );
}

export default Pagination;
