import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  margin: 1%;
  text-align: center;
  background: none;
  background-color: #f5f5f5;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  width: 20%;
  border: none;
  border-radius: 30px;
  border-bottom: 1px solid #62a5a1;
  margin: 1% 0;

  &:focus {
    outline: none;
  }
`;

const StyledH3Form = styled.h3`
  color: #62a5a1;
  margin: 2% 0 0 0;
`;

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <StyledH3Form>{label}</StyledH3Form>
      <StyledInput onChange={handleChange} {...otherProps} />
    </>
  );
};

export default Input;
