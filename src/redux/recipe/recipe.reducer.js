import {
  ADD_RECIPE,
  REMOVE_RECIPE,
} from "../recipe/recipe.actions";

import { removeRecipe } from "./recipe.actions";

const INITIAL_STATE = {
  recipes: [],
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: removeRecipe(state.recipes, action.payload),
      };
    default:
      return state;
  }
};

export default recipeReducer;
