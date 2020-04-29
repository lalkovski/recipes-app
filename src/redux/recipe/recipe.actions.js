export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const removeRecipe = (recipe) => ({
  type: REMOVE_RECIPE,
  payload: recipe,
});
