import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  display: flex;
  margin: 1%;
  resize: none;
  width: 50%;
  height: 300%;
`;

interface Props {
  name?: string;
  cols?: number;
  rows?: number;
}

const Input = (props: Props) => {
  return (
    <>
      <label>{props.name}</label>
      <StyledTextArea />
    </>
  );
};

export default Input;
