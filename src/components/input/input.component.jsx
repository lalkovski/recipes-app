import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  margin: 1%;
`;


const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <label>{label}</label>
      <StyledInput onChange={handleChange} {...otherProps}/>
    </>
  );
};

export default Input;
