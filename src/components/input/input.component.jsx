import React from "react";
import { StyledH3Form, StyledInput } from "../../styles/styles";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <StyledH3Form>{label}</StyledH3Form>
      <StyledInput onChange={handleChange} {...otherProps} />
    </>
  );
};

export default Input;
