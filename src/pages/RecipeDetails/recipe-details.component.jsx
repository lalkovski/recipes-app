import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeRecipe } from "../../redux/recipe/recipe.actions";
import {
  IngredientListDiv,
  RecipeDetailsContainer,
  StyledH1,
  StyledH3,
  ParentContainer,
  LeftContainer,
  RightContainer,
  StyledP,
  IngredientDiv,
  RecipeDetailsButtonContainer,
  RecipeDetailsCustomNavLink,
  InstructionsP,
  CustomButton,
} from "../../styles/styles";

const RecipeDetails = ({ history, recipes, removeRecipe }) => {
  const id = window.location.href.substr(37, window.location.href.length);
  const filteredRecipes = recipes.filter((recipe) => recipe.id === id);

  let formattedHours =
    filteredRecipes[0].preparationHours.toString().length === 1
      ? "0" + filteredRecipes[0].preparationHours
      : filteredRecipes[0].preparationHours;
  let formattedMinutes =
    filteredRecipes[0].preparationMinutes.toString().length === 1
      ? "0" + filteredRecipes[0].preparationMinutes
      : filteredRecipes[0].preparationMinutes;

  const ingredientList = filteredRecipes[0].selectedIngredients.map(
    (ingredient) => {
      return (
        <IngredientListDiv key={ingredient.name}>
          {ingredient.name}
          &nbsp;
          {ingredient.quantity}
          {ingredient.unit}
        </IngredientListDiv>
      );
    }
  );

  const handleSubmit = () => {
    if (window.confirm("Do you want to remove this recipe?")) {
      removeRecipe(filteredRecipes[0]);
      history.push("/");
    }
  };

  return (
    <RecipeDetailsContainer>
      <StyledH1>Recipe Details</StyledH1>
      <ParentContainer>
        <LeftContainer>
          <StyledH3>Recipe Name</StyledH3>
          <StyledP>{filteredRecipes[0].name}</StyledP>
          <StyledH3>Recipe Source</StyledH3>
          <StyledP>{filteredRecipes[0].source}</StyledP>
          <StyledH3>Ingrident List</StyledH3>
          <IngredientDiv>{ingredientList}</IngredientDiv>
          <StyledH3>Preparation Time</StyledH3>
          <StyledP>
            {formattedHours !== "00" ? formattedHours + " Hours " : ""}
            {formattedMinutes} Minutes
          </StyledP>
          <RecipeDetailsButtonContainer>
            <RecipeDetailsCustomNavLink to={`/`}>
              Recipe List
            </RecipeDetailsCustomNavLink>
            <CustomButton onClick={handleSubmit}>Remove Recipe</CustomButton>
          </RecipeDetailsButtonContainer>
        </LeftContainer>
        <RightContainer>
          <StyledH3>Recipe Instructions</StyledH3>
          <InstructionsP>
            {filteredRecipes[0].preparationInstructions}
          </InstructionsP>
        </RightContainer>
      </ParentContainer>
    </RecipeDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  removeRecipe: (recipe) => dispatch(removeRecipe(recipe)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)
);
