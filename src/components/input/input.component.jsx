import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  margin: 1%;
`;


const Input = (props) => {
  return (
    <>
      <label>{props.name}</label>
      <StyledInput onChange={props.handleChange}/>
    </>
  );
};

export default Input;
