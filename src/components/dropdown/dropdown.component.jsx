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
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  display: flex;
  margin: 1% 0 1% 1%;
  width: 4%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;


const StyledH3Form = styled.h3`
  color: #62a5a1;
  margin: 2% 0 0 0;
`;


const StyledLabelUnit = styled.label`
  display: flex;
  margin: 0 0.5em 0 0.2em;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: #62a5a1;
`;

const CustomButtonDropdown = styled.button`
  width: %;
  height: 80%;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 25px 0 25px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 0;
  background-color: #62a5a1;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

const ListContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 8%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
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
      this.state.selectedIngredient.quantity >= 1
      &&
      this.state.ingredients.filter((obj) => obj.name === this.state.selectedIngredient.name).length === 0
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
          <StyledInput
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
