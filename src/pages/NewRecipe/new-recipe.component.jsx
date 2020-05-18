import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addRecipe } from "../../redux/recipe/recipe.actions";
import { v4 as uuidv4 } from "uuid";

import Input from "../../components/input/input.component";
import TimeInput from "../../components/time-input/time-input.component";
import TextArea from "../../components/textarea/textarea.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import {
  NewRecipeContainer,
  StyledH1,
  ParentContainer,
  FormContainer,
  TimeContainer,
  ButtonContainer,
  CustomButtonNR,
  CustomNavLink,
  ErrorP,
} from "../../styles/styles";

class NewRecipe extends Component {
  state = {
    recipe: {
      id: "",
      name: "",
      source: "/",
      selectedIngredients: [],
      preparationHours: 0,
      preparationMinutes: 0,
      preparationInstructions: "",
    },
    errorfields: [],
    isSuccess: false,
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState((prevState) => ({
      recipe: {
        ...prevState.recipe,
        [name]: value,
      },
    }));
  };

  addIngredients = (selectedIngredients) => {
    this.setState((state) => ({
      recipe: { ...state.recipe, selectedIngredients },
    }));
  };

  handleSubmit = async (event) => {
    const recipe = this.state.recipe;
    const errorfields = [];
    if (recipe.name === "") {
      errorfields.push("You must have a recipe name.");
    }
    if (
      (recipe.preparationMinutes <= 0 && recipe.preparationHours <= 0) ||
      (recipe.preparationMinutes >= 60 && recipe.preparationHours <= 0) ||
      (recipe.preparationMinutes < 0 && recipe.preparationHours > 0)
    ) {
      errorfields.push(
        "You must have the preparation time be at least a minute."
      );
    }
    if (recipe.preparationInstructions === "") {
      errorfields.push("You must have preparation instructions.");
    }
    if (recipe.selectedIngredients.length < 1) {
      errorfields.push("You must have at least one ingredient selected.");
    }
    if (errorfields.length === 0) {
      const id = await uuidv4();
      this.setState((state) => ({
        recipe: {
          ...state.recipe,
          id: id,
        },
      }));
      this.props.addRecipe(this.state.recipe);
      this.setState({ errorfields: [] });
      this.setState({ isSuccess: true });
    } else {
      this.setState({ errorfields: errorfields });
      this.setState({ isSuccess: false });
    }
  };

  render() {
    if (this.state.isSuccess) {
      return <Redirect to="/" />;
    }

    return (
      <NewRecipeContainer>
        <StyledH1>New Recipe</StyledH1>
        <ParentContainer>
          <FormContainer>
            {this.state.errorfields &&
              this.state.errorfields.map((e) => <ErrorP key={e}>{e}</ErrorP>)}
            <Input
              name="name"
              handleChange={this.handleChange}
              value={this.state.recipe.name}
              label="Recipe Name"
              required
            />
            <Input
              name="source"
              handleChange={this.handleChange}
              label="Recipe Source"
            />
            <Dropdown
              name="List of Ingredients"
              handleChange={this.addIngredients}
              options={this.props.ingredientsList}
              required
            />
            <TimeContainer>
              <TimeInput
                name="PreparationTime"
                handleChange={this.handleChange}
                label="Preparation Time"
              />
            </TimeContainer>
            <TextArea
              name="preparationInstructions"
              handleChange={this.handleChange}
              value={this.state.recipe.preparationInstructions}
              label="Preparation Instructions"
            />
            <ButtonContainer>
              <CustomButtonNR onClick={this.handleSubmit}>Save</CustomButtonNR>
              <CustomNavLink to={`/`}>Discard</CustomNavLink>
            </ButtonContainer>
          </FormContainer>
        </ParentContainer>
      </NewRecipeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredientsList: state.recipe.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
