import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/input/input.component";
import TimeInput from "../../components/time-input/time-input.component";
import TextArea from "../../components/textarea/textarea.component";

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
  height: 100vh;
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
`;

const NewRecipe = () => {


  const [name, setName] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;

    setName(value);
  };

  console.log(name);

  return (
    <Container>
      <h1>New Recipe</h1>
      <FormContainer>
        <Input name="Recipe Name" onChange={handleChange} />
        <Input name="Recipe source" />
        <Input name="List of ingridients" />
        <TimeContainer>
          <TimeInput name="Preparation time" />
        </TimeContainer>
        <TextArea name="Preparation instructions" />
        <ButtonContainer>
          <button>Save</button>
          <button>Discard</button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default NewRecipe;
