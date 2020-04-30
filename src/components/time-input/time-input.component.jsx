import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  margin: 1%;
  width: 8%;
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

const TimeInput = ({ label, name, handleChange, ...otherProps }) => {
  return (
    <Container>
      <StyledH3Form>{label}</StyledH3Form>
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
