import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 0;
`

const ListItems = (props) => {
  const ingredientList = props.ingredients;
  const list = ingredientList.map((ingredient) => (
    <li key={ingredient.name}>
      {ingredient.name} {ingredient.quantity}
      {ingredient.unit}
      <button
        onClick={(event) => props.deleteIngredient(event, ingredient.name)}
      >
        X
      </button>
    </li>
  ));
  return <StyledList>{list}</StyledList>;
};

export default ListItems;
