import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeRecipe } from "../../redux/recipe/recipe.actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #62a5a1;
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
  background-color: #fff;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`;

const StyledH3 = styled.h3`
  color: #62a5a1;
  margin: 5% 0 0 0;
`;

const StyledP = styled.p`
  margin: 0;
  font-size: 2rem;
`;

const IngredientDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const IngredientP = styled.p`
  margin: 0;
  padding: 1%;
  margin: 1%;
  font-size: 1.5rem;
  border: 1px solid #dddddd;
`;

const InstructionsP = styled.p`
  margin: 5px 5%;
  font-size: 1.3rem;
  text-align: justify;
`;

const CustomButton = styled.button`
  width: 30%;
  height: 52px;
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
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

const CustomNavLink = styled(NavLink)`
  width: 21%;
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
`;

const RecipeDetails = ({ history, recipes, removeRecipe }) => {
  const id = window.location.href.substr(37, window.location.href.length);
  const filteredRecipes = recipes.filter((recipe) => recipe.id === id);
  console.log(recipes.filter((recipe) => recipe.id === id));

  // const filteredRecipes = [
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
        <IngredientP key={ingredient.name}>
          {ingredient.name}
          &nbsp;
          {ingredient.quantity}
          {ingredient.unit}
        </IngredientP>
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
    <Container>
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
          <ButtonContainer>
            <CustomButton onClick={handleSubmit}>Remove Recipe</CustomButton>
            <CustomNavLink to={`/`}>Recipe List</CustomNavLink>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          <StyledH3>Recipe Instructions</StyledH3>
          <InstructionsP>
            {filteredRecipes[0].preparationInstructions}
          </InstructionsP>
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
