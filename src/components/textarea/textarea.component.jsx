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
  margin-top:2%;
  width: 100%;
`;

const Input = ({ name, handleChange, label, ...otherProps }) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledTextArea name={name} onChange={handleChange} rows={12}/>
    </Container>
  );
};

export default Input;
