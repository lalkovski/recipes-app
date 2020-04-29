import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeRecipe } from "../../redux/recipe/recipe.actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
`;

const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const RecipeDetails = ({ history, recipes, removeRecipe }) => {
  const id = window.location.href.substr(37, window.location.href.length);
  const filteredRecipes = recipes.filter((recipe) => recipe.id === id);
  console.log(recipes.filter((recipe) => recipe.id === id));

  // const recipes = [
  //   {
  //     id: "06cc50db-01ea-42e0-ba02-a9cf9e533c82",
  //     name: "Recipe No. 1",
  //     source: "https://google.com",
  //     selectedIngredients: [
  //       {
  //         name: "Flour",
  //         quantity: "100",
  //         unit: "g",
  //       },
  //       {
  //         name: "Sugar",
  //         quantity: "300",
  //         unit: "g",
  //       },
  //       {
  //         name: "Milk",
  //         quantity: "500",
  //         unit: "ml",
  //       },
  //     ],
  //     preparationHours: "1",
  //     preparationMinutes: "30",
  //     preparationInstructions:
  //       "On a recent gourmet getaway to Aspen, I had the pleasure of tasting a fantastic Tres Leches cake at the Hotel Jerome (pictured below). Chef Christopher Keating, crediting his wife for the recipe, explained it was one of the items that he just couldn’t take off the dessert menu. As I made my way through the moist, milky goodness, I knew why — this was a great cake.\n\nI'm sure I'd had it before, but I couldn't recall where or when, so it was like tasting it for the first time. Normally a soggy cake would not be a good thing, but here it's genius. The cake is soaked with a sweet milk syrup made from condensed milk, evaporated milk, and half and half (hence the name, Tres Leches). It's like eating cake and drinking milk, but in the same bite!\n\nI won't pretend this version is better than the Hotel Jerome's made-from-scratch recipe, but since this is my Mom's version, it's at least a tie. She would have normally made this from scratch also, but time was short, and the humidity was high (life-threateningly high), so she used a yellow box cake mix, which worked just fine.\n\nWhenever I post an ethnic recipe like this, I like to research the name and history. Here I didn’t bother, since the cakes origins are so obvious once you see how it's made. So, with no facts to back up my story, here is how the Tres Leches cake was born.\n\nSomewhere in either Mexico or Nicaragua, someone made a cake. They were going to serve it with milk, as people tend to do, but something happened which caused the milk to spill on to the cake. Not wanting to waste a good piece of cake, soggy though it may be, the Mexican or Nicaraguan cook served it anyway. People loved it, and eventually a sweet tres leches (three-milk) syrup was developed for soaking the spongy cake.\n\nThat's my story and I'm sticking to it! Whether you make a cake from scratch, or use Pauline's shortcut, give this delicious dessert a try! Enjoy.",
  //   },
  // ];

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
        <p key={ingredient.name}>
          {ingredient.name}&nbsp;{ingredient.quantity}
          {ingredient.unit}
        </p>
      );
    }
  );

  return (
    <Container>
      <h1>Recipe Details</h1>
      <ParentContainer>
        <LeftContainer>
          <h2>Recipe Name</h2>
          <p>{filteredRecipes[0].name}</p>

          <h2>Recipe Source</h2>
          <p>{filteredRecipes[0].source}</p>

          <h2>Ingrident List</h2>
          <div>{ingredientList}</div>

          <h2>Preparation Time</h2>
          <p>
            {formattedHours !== "00" ? formattedHours + " Hours " : ""}
            {formattedMinutes} Minutes
          </p>

          <button
            onClick={() => {
              removeRecipe(filteredRecipes[0]);
              history.push("/");
            }}
          >
            Remove recipe
          </button>
          <NavLink to={`/`}>
            <button>Recipe List</button>
          </NavLink>
        </LeftContainer>
        <RightContainer>
          <h2>Recipe Instructions</h2>

          <p>{filteredRecipes[0].preparationInstructions}</p>
        </RightContainer>
      </ParentContainer>
    </Container>
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
