import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  margin: 1%;
  width: 8%;
`;

const StyledLabel = styled.label`
  display: flex;
  align-self: center;
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
  width: 100%;
  height: 100%;
`;

const TimeInput = ({ label, name, handleChange, ...otherProps }) => {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <InputContainer>
        <StyledInput
          name="preparationHours"
          type="number"
          min="0"
          max="23"
          placeholder="0"
          onChange={handleChange}
        />
        Hours &nbsp;
        <StyledInput
          name="preparationMinutes"
          type="number"
          min="0"
          max="59"
          placeholder="0"
          onChange={handleChange}
        />
        Minutes
      </InputContainer>
    </Container>
  );
};

export default TimeInput;
