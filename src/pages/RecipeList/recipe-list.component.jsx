import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Table from "../../components/table/table.component";

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 1% 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #62a5a1;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`;

const CustomNavLinkList = styled(NavLink)`
  width: 8%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #62a5a1;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  text-decoration: none;
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

const RecipeList = () => {
  return (
    <Container>
      <StyledH1>Recipe List</StyledH1>
      <ListContainer>
        <CustomNavLinkList to="/new-recipe">Add Recipe</CustomNavLinkList>
        <Table />
      </ListContainer>
    </Container>
  );
};

export default RecipeList;
