import React from "react";
import {
  StyledListIngredient,
  StyledListIngredientContainer,
  CustomButtonList,
  IngredientListP,
} from "../../styles/styles";

const ListItems = (props) => {
  const ingredientList = props.ingredients;
  const list = ingredientList.map((ingredient) => (
    <StyledListIngredient key={ingredient.name}>
      <IngredientListP key={ingredient.name}>
        {ingredient.name}
        &nbsp;
        {ingredient.quantity}
        {ingredient.unit}
      </IngredientListP>
      <CustomButtonList
        onClick={(event) => props.deleteIngredient(event, ingredient.name)}
      >
        X
      </CustomButtonList>
    </StyledListIngredient>
  ));
  return <StyledListIngredientContainer>{list}</StyledListIngredientContainer>;
};

export default ListItems;
