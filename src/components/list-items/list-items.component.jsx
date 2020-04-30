import React from "react";
import styled from "styled-components";

const CustomButtonList = styled.button`
  width: 20%;
  height: 80%;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 10px 0 10px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 2% 5%;
  background-color: #62a5a1;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

const StyledListIngredient = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
`

const StyledListIngredientContainer = styled.div`
  display: flex
  width: 100vw;
`

const IngredientListP = styled.p`
  margin: 0;
  padding: 1%;
  margin: 1%;
  font-size: 1rem;
`;


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
