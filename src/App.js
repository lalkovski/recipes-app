import React from "react";
import { Route, Switch } from "react-router-dom";
import NewRecipe from "./pages/NewRecipe/new-recipe.component";
import RecipeList from "./pages/RecipeList/recipe-list.component";
import RecipeDetails from "./pages/RecipeDetails/recipe-details.component";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <RecipeList />
      </Route>
      <Route path="/new-recipe">
        <NewRecipe />
      </Route>
      <Route path="/recipe-details">
        <RecipeDetails />
      </Route>
    </Switch>
  );
};

export default App;
