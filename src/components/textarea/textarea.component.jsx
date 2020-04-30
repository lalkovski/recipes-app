import React from "react";
import {
  TextAreaContainer,
  StyledH3Form,
  StyledTextArea,
} from "../../styles/styles";

const Input = ({ name, handleChange, label, ...otherProps }) => {
  return (
    <TextAreaContainer>
      <StyledH3Form>{label}</StyledH3Form>
      <StyledTextArea name={name} onChange={handleChange} rows={12} />
    </TextAreaContainer>
  );
};

export default Input;
