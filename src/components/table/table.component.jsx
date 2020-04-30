import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeRecipe } from "../../redux/recipe/recipe.actions";

import "./noRecipes.png";
import {
  TableContainer,
  GlobalStyle,
  TableButtonContainer,
  tdStyle,
  CustomButtonTable,
  StyledImage,
  StyledIMG,
} from "../../styles/styles";



const Table = ({ recipes, removeRecipe, history }) => {
  const handleSubmit = (recipe) => {
    if (window.confirm("Do you want to remove this recipe?")) {
      removeRecipe(recipe);
    }
  };

  return (
    <TableContainer>
      <GlobalStyle />
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
          {recipes.length > 0 ? (
            recipes.map((recipe) => {
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
                trimmedInstructions = instructions
                  .toString()
                  .substr(0, position + 50)
                  .concat("...");
              }

              let formattedHours =
                recipe.preparationHours.toString().length === 1
                  ? "0" + recipe.preparationHours
                  : recipe.preparationHours;
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
                  <td style={tdStyle}>
                    {formattedHours !== "00" ? formattedHours + " Hours " : ""}
                    {formattedMinutes} Minutes
                  </td>
                  <td>
                    <TableButtonContainer>
                      <CustomButtonTable
                        onClick={() =>
                          history.push(`/recipe-details/${recipe.id}`)
                        }
                      >
                        See more
                      </CustomButtonTable>
                      <CustomButtonTable onClick={() => handleSubmit(recipe)}>
                        Remove
                      </CustomButtonTable>
                    </TableButtonContainer>
                  </td>
                </tr>
              );
            })
          ) : (
            <StyledImage>
              <StyledIMG src={require("./noRecipes.png")} alt="Cute cat" />
            </StyledImage>
          )}
        </tbody>
      </table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  removeRecipe: (recipe) => dispatch(removeRecipe(recipe)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
