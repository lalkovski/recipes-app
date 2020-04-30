import React from "react";
import Table from "../../components/table/table.component";
import {
  RecipeListContainer,
  StyledH1,
  ListContainer,
  CustomNavLinkList,
} from "../../styles/styles";

const RecipeList = () => {
  return (
    <RecipeListContainer>
      <StyledH1>Recipe List</StyledH1>
      <ListContainer>
        <CustomNavLinkList to="/new-recipe">Add Recipe</CustomNavLinkList>
        <Table />
      </ListContainer>
    </RecipeListContainer>
  );
};

export default RecipeList;
