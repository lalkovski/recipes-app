import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const StyledTextArea = styled.textarea`
  margin: 0;
  resize: none;
  margin-top: 2%;
  width: 100%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;

const StyledH3Form = styled.h3`
  color: #62a5a1;
  margin: 2% 0 0 0;
`;


const Input = ({ name, handleChange, label, ...otherProps }) => {
  return (
    <Container>
      <StyledH3Form>{label}</StyledH3Form>
      <StyledTextArea name={name} onChange={handleChange} rows={12} />
    </Container>
  );
};

export default Input;
