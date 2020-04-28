import React, { Component } from "react";
import styled from "styled-components";
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

const StyledButton = styled.button`
  margin: 1em;
`;

class NewRecipe extends Component {
  state = {
    recipeName: "",
    recipeSource: "",
    selectedIngridents: [],
    preparationHours: "",
    preparationMinutes: "",
    preparationInstructions: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log("the state is");
    console.log(this.state.recipeName);
  };

  render() {
    return (
      <Container>
        <h1>New Recipe</h1>
        <FormContainer>
          <Input
            name="recipeName"
            handleChange={this.handleChange}
            value={this.state.recipeName}
            label="Recipe Name"
            required
          />
          <Input
            name="recipeSource"
            handleChange={this.handleChange}
            value={this.state.recipeSource}
            label="Recipe Source"
          />
          <Dropdown
            name="List of Ingridients"
            handleChange={this.handleChange}
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
            value={this.state.preparationInstructions}
            label="Preparation Instructions"
          />
          <ButtonContainer>
            <StyledButton>Save</StyledButton>
            <StyledButton>Discard</StyledButton>
          </ButtonContainer>
        </FormContainer>
      </Container>
    );
  }
}

export default NewRecipe;
