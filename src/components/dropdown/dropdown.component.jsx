import React, { Component } from "react";
import ListItems from "../list-items/list-items.component";
import {
  Container,
  StyledInputDropdown,
  StyledH3Form,
  DropdownContainer,
  StyledSelect,
  StyledLabelUnit,
  CustomButtonDropdown,
  DropdownListContainer,
} from "../../styles/styles";

class Dropdown extends Component {
  state = {
    quantity: "",
    selectedIngredient: { name: "Flour", quantity: 1, unit: "g" },
    ingredients: [],
  };

  deleteIngredient = (event, name) => {
    const array = [...this.state.ingredients];
    const deletableObject = array.filter((obj) => obj.name === name)[0];
    const index = array.indexOf(deletableObject);

    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ ingredients: array });
      this.props.handleChange(array);
    }
  };

  handleChange = (event) => {
    const newQuantity = event.target.value;

    this.setState((prevState) => ({
      selectedIngredient: {
        ...prevState.selectedIngredient,
        quantity: newQuantity,
      },
    }));
  };

  handleSubmit = (event) => {
    document.getElementById("quantity").value = "";

    if (
      this.state.selectedIngredient !== "" &&
      this.state.selectedIngredient.quantity >= 1 &&
      this.state.ingredients.filter(
        (obj) => obj.name === this.state.selectedIngredient.name
      ).length === 0
    ) {
      this.setState((state) => {
        const ingredients = [...state.ingredients, state.selectedIngredient];
        this.props.handleChange(ingredients);
        return {
          ingredients,
          quantity: 0,
        };
      });
    }
  };

  handleSelect = (e) => {
    document.getElementById("quantity").value = "";

    this.setState({
      selectedIngredient: this.props.options.filter(
        (ingredient) => ingredient.name === e.target.value
      )[0],
    });
  };

  render() {
    return (
      <Container>
        <StyledH3Form>{this.props.name}</StyledH3Form>
        <DropdownContainer>
          <StyledSelect onChange={this.handleSelect}>
            {this.props.options.map((ingredient) => (
              <option key={ingredient.name} value={ingredient.name}>
                {ingredient.name}
              </option>
            ))}
          </StyledSelect>
          <StyledInputDropdown
            type="number"
            name="quantity"
            id="quantity"
            min="1"
            placeholder="1"
            onChange={this.handleChange}
          />
          <StyledLabelUnit>
            {this.state.selectedIngredient.unit}
          </StyledLabelUnit>
          <CustomButtonDropdown onClick={this.handleSubmit}>
            Add
          </CustomButtonDropdown>
        </DropdownContainer>
        <DropdownListContainer>
          <ListItems
            deleteIngredient={this.deleteIngredient}
            ingredients={this.state.ingredients}
          />
        </DropdownListContainer>
      </Container>
    );
  }
}

export default Dropdown;
