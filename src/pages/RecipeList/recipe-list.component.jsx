import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Table from "../../components/table/table.component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
`;

const RecipeList = () => {
  return (
    <Container>
      <h1>Recipe List</h1>
      <NavLink to="/new-recipe">
        <button>Add Recipe</button>
      </NavLink>
      <Table />
    </Container>
  );
};

export default RecipeList;
