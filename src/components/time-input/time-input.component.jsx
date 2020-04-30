import React from "react";
import {
  Container,
  StyledH3Form,
  StyledTimeInput,
  InputContainer,
  StyledTimeP,
} from "../../styles/styles";

const TimeInput = ({ label, name, handleChange, ...otherProps }) => {
  return (
    <Container>
      <StyledH3Form>{label}</StyledH3Form>
      <InputContainer>
        <StyledTimeInput
          name="preparationHours"
          type="number"
          min="0"
          max="23"
          placeholder="0"
          onChange={handleChange}
        />
        <StyledTimeP>Hours &nbsp;</StyledTimeP>
        <StyledTimeInput
          name="preparationMinutes"
          type="number"
          min="0"
          max="59"
          placeholder="0"
          onChange={handleChange}
        />
        <StyledTimeP>Minutes</StyledTimeP>
      </InputContainer>
    </Container>
  );
};

export default TimeInput;
