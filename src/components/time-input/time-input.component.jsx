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

interface Props {
  name: string;
}

const TimeInput = (props: Props) => {
  return (
    <Container>
      <StyledLabel>{props.name}</StyledLabel>
      <InputContainer>
        <StyledInput type="number" min="0" max="23" placeholder="0" />
        Hours &nbsp;
        <StyledInput type="number" min="0" max="59" placeholder="0" />
        Minutes
      </InputContainer>
    </Container>
  );
};

export default TimeInput;
