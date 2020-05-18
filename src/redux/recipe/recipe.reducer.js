import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  ADD_INGREDIENT,
} from "../recipe/recipe.actions";

const INITIAL_STATE = {
  recipes: [],
  ingredients: [
    { name: "Flour", quantity: 1, unit: "g" },
    { name: "Milk", quantity: 1, unit: "ml" },
    { name: "Oil", quantity: 1, unit: "ml" },
    { name: "Salt", quantity: 1, unit: "g" },
    { name: "Sugar", quantity: 1, unit: "g" },
    { name: "Eggs", quantity: 1, unit: "g" },
    { name: "Tomatoes", quantity: 1, unit: "g" },
    { name: "Peppers", quantity: 1, unit: "g" },
    { name: "Cheese", quantity: 1, unit: "g" },
    { name: "Potatoes", quantity: 1, unit: "g" },
    { name: "Meat", quantity: 1, unit: "g" },
  ],
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
        recipes: state.recipes.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    default:
      return state;
  }
};

export default recipeReducer;
