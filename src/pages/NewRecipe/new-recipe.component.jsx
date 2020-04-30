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
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #62a5a1;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TimeContainer = styled.div`
  display: block;
  margin: 0;
`;

const CustomButtonNR = styled.button`
  width: 26%;
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
  margin: 4%;
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
        <StyledH1>New Recipe</StyledH1>
        <ParentContainer>
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
              <CustomButtonNR onClick={this.handleSubmit}>Save</CustomButtonNR>
              <CustomNavLink to={`/`}>Discard</CustomNavLink>
            </ButtonContainer>
          </FormContainer>
        </ParentContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
});

export default connect(null, mapDispatchToProps)(NewRecipe);
