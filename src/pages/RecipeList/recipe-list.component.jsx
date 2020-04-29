import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
`;

const RecipeList = ({ recipes }) => {
  return (
    <Container>
      <h1>Recipe List</h1>

      <NavLink to="/new-recipe">
        <button>Add Recipe</button>
      </NavLink>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Recipe Name</th>
            <th>Recipe Source</th>
            <th>No. of ingredients</th>
            <th>Ingrident List</th>
            <th>Preparation Instructions</th>
            <th>Preparation Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0
            ? recipes.map((recipe) => {
                const ingredientLength = recipe.selectedIngredients.length;

                const ingredientList =
                  ingredientLength > 3
                    ? recipe.selectedIngredients
                        .map((ingredient) => ingredient.name)
                        .slice(0, 3)
                        .toString()
                        .concat("...")
                    : recipe.selectedIngredients
                        .map((ingredient) => ingredient.name)
                        .toString();

                const instructions = recipe.preparationInstructions;
                let trimmedInstructions = "";

                if (recipe.preparationInstructions.toString().length > 50) {
                  let restOfString = instructions
                    .toString()
                    .substr(50, instructions.length);
                  let position = 0;
                  for (let i = 0; i < restOfString.length; i++) {
                    if (restOfString.charAt(i) === " ") {
                      position = i;
                      break;
                    }
                  }
                  trimmedInstructions = instructions.toString().substr(0, position + 50).concat("...");
                }

                let formattedHours = recipe.preparationHours.toString().length === 1 ? "0" + recipe.preparationHours : recipe.preparationHours;
                let formattedMinutes =
                  recipe.preparationMinutes.toString().length === 1
                    ? "0" + recipe.preparationMinutes
                    : recipe.preparationMinutes;


                return (
                  <tr key={recipe.id}>
                    <td>{recipe.id}</td>
                    <td>{recipe.name}</td>
                    <td>{recipe.source}</td>
                    <td>{ingredientLength}</td>
                    <td>{ingredientList}</td>
                    <td>
                      {instructions.length > 50
                        ? trimmedInstructions
                        : instructions}
                    </td>
                    <td>
                      {formattedHours !== "00" ? formattedHours+" Hours " : ""}
                      {formattedMinutes} Minutes
                    </td>
                    <td>
                      <button>See more</button>
                      <button>Remove</button>
                    </td>
                  </tr>
                );
              })
            : console.log("No recipes")}
        </tbody>
      </table>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

export default connect(mapStateToProps, null)(RecipeList);
