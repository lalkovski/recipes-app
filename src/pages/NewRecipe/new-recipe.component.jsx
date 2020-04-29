import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";
import { addRecipe } from "../../redux/recipe/recipe.actions";
import { v4 as uuidv4 } from "uuid";

import Input from "../../components/input/input.component";
import TimeInput from "../../components/time-input/time-input.component";
import TextArea from "../../components/textarea/textarea.component";
import Dropdown from "../../components/dropdown/dropdown.component";

const IngredientList = [
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
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TimeContainer = styled.div`
  display: block;
  margin-bottom: 1%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1%;
`;

const StyledButton = styled.div`
  margin: 1em;
  width: 50px;
  height: 50px;
  background-color: red;
`;

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
      console.log(this.state.recipe);
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
      <Container>
        <h1>New Recipe</h1>
        <FormContainer>
          {this.state.errorfields &&
            this.state.errorfields.map((e) => <p key={e}>{e}</p>)}
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
            name="List of Ingridients"
            handleChange={this.addIngredients}
            options={IngredientList}
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
            <StyledButton onClick={this.handleSubmit}>Save</StyledButton>
            <NavLink to={`/`}>
              <StyledButton>Discard</StyledButton>
            </NavLink>
          </ButtonContainer>
        </FormContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
});

export default connect(null, mapDispatchToProps)(NewRecipe);
