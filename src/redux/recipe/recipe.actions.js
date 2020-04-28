export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const addRecipesToRedux = (recipes, recipe) => {
  if (recipes.length === 0) {
    return [recipe];
  } else {
    console.log(recipes.length);
    console.log(recipes);
    return [...recipes, recipe];
  }
};

export const removeRecipe = (recipe) => ({
  type: REMOVE_RECIPE,
  payload: recipe,
});
