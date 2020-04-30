import React from "react";
import styled from "styled-components";

const StyledTimeInput = styled.input`
  display: flex;
  margin: 1%;
  width: 8%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;

const StyledH3Form = styled.h3`
  color: #62a5a1;
  margin: 2% 0 0 0;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

const StyledTimeP = styled.p`
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: #62a5a1;
`;

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
