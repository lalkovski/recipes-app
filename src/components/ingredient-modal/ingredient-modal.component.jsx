import React, { useState } from "react";
import { connect } from "react-redux";
import { addIngredient } from "../../redux/recipe/recipe.actions";
import {
  StyledH3Form,
  StyledInput,
  ModalP,
  CustomButton,
  StyledModal,
  StyledModalBody,
  ModalContainer,
  ModalInputContainer,
  ModalPContainer,
  ModalButtonContainer,
  InvisibleDiv,
  ModalPError,
} from "../../styles/styles";

const IngredientModal = ({ show, onHide, addIngredient }) => {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  const handleSubmit = (e) => {
    const ingredient = { name: name, quantity: 1, unit: unit };
    const errorMessage = [];
    if (name.trim() !== "" && unit.trim() !== "") {
      addIngredient(ingredient);
      onHide();
      setErrorMessages([]);
      setName("");
      setUnit("");
    }
    if (name.trim() === "") {
      errorMessage.push("The ingredient name is required. ");
    }
    if (unit.trim() === "") {
      errorMessage.push("The ingredient unit is required. ");
    }
    setErrorMessages(errorMessage);
  };

  if (show) {
    return (
      <StyledModal>
        <StyledModalBody>
          <StyledH3Form>Add an Ingredient</StyledH3Form>
          <ModalContainer>
            <ModalInputContainer>
              <ModalPContainer>
                <ModalP>Ingredient Name</ModalP>
              </ModalPContainer>
              <StyledInput
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalPContainer>
                <ModalP>Ingredient Unit</ModalP>
              </ModalPContainer>
              <StyledInput
                name="unit"
                onChange={(e) => setUnit(e.target.value)}
              />
            </ModalInputContainer>
            <ModalPError>{errorMessages}</ModalPError>
          </ModalContainer>
          <ModalButtonContainer>
            <CustomButton onClick={handleSubmit}>
              Add an Ingredient
            </CustomButton>
            <CustomButton onClick={() => {onHide(); setErrorMessages([]);}}>Close</CustomButton>
          </ModalButtonContainer>
        </StyledModalBody>
      </StyledModal>
    );
  } else {
    return <InvisibleDiv />;
  }
};

const mapDispatchToProps = (dispatch) => ({
  addIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
});

export default connect(null, mapDispatchToProps)(IngredientModal);
