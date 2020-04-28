import React, { Component } from "react";
import ListItems from "../list-items/list-items.component";
import styled from "styled-components";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  display: flex;
  margin: 1% 0 1% 1%;
  width: 3%;
`;

const StyledLabel = styled.label`
  display: flex;
  margin: 0 0.5em 0 0.5em;
  align-self: center;
`;

const ListContainer = styled.div`
  display: flex;
  align-self: center;
`;
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
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ ingredients: array });
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
      this.state.selectedIngredient.quantity >= 1
      &&
      this.state.ingredients.filter((obj) => obj.name === this.state.selectedIngredient.name).length ===~ 0
    ) {
      this.setState((state) => {
        const ingredients = [...state.ingredients, state.selectedIngredient];
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
    // console.log(this.state.ingridients);
    return (
      <Container>
        <StyledLabel>{this.props.name}</StyledLabel>
        <DropdownContainer>
          <select onChange={this.handleSelect}>
            {this.props.options.map((ingredient) => (
              <option key={ingredient.name} value={ingredient.name}>
                {ingredient.name}
              </option>
            ))}
          </select>
          <StyledInput
            type="number"
            name="quantity"
            id="quantity"
            min="1"
            placeholder="1"
            onChange={this.handleChange}
          />
          <StyledLabel>{this.state.selectedIngredient.unit}</StyledLabel>
          <button onClick={this.handleSubmit}>Add</button>
        </DropdownContainer>
        <ListContainer>
          <ListItems
            deleteIngredient={this.deleteIngredient}
            ingredients={this.state.ingredients}
          />
        </ListContainer>
      </Container>
    );
  }
}

export default Dropdown;
