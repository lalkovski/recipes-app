export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const removeRecipe = (recipe) => ({
  type: REMOVE_RECIPE,
  payload: recipe,
});

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});
