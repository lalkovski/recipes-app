import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeRecipe } from "../../redux/recipe/recipe.actions";

const TableContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1%;
  justify-content: center;
`;

const TableButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CustomButtonTable = styled.button`
  width: 40%;
	height: 60%;
  letter-spacing: 0.5px;
	line-height: 10px;
	padding: 0 25px 0 25px;
	font-size: 10px;
	text-transform: uppercase;
	cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
	color: white;
	border: 1px solid #62a5a1;
	font-family: Roboto;
	margin: 0 3%;
	background-color: #62a5a1;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

const GlobalStyle = createGlobalStyle`
  table {
  width: 90%;
  height: 100%;
  border: 1px solid #dddddd;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #dddddd;
    border-collapse: collapse;
    text-align: center;
  }
  th,
  td,
  tr {
    padding: 10px;
  }
  th {
    text-align: center;
  }
  tr
  td:last-child {
    padding: 0;
    height: 100%;
  }
}
`;

const tdStyle = {
  "width": "86px"
}

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
                      {formattedHours !== "00"
                        ? (formattedHours + " Hours ")
                        : ""}
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
            : console.log("No recipes")}
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
