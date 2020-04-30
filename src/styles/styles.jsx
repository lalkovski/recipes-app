import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1%;
  justify-content: center;
`;

export const TableButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CustomButtonTable = styled.button`
  width: 40%;
  height: 60%;
  letter-spacing: 0.5px;
  line-height: 10px;
  padding: 0 25px 0 25px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 0 3%;
  background-color: #62a5a1;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const GlobalStyle = createGlobalStyle`
  table {
  width: 90%;
  height: 100%;
  border: 1px solid #dddddd;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #dddddd;
    border-collapse: collapse;
    text-align: center;
  }
  th,
  td,
  tr {
    padding: 10px;
  }
  th {
    text-align: center;
  }
  tr
  td:last-child {
    padding: 0;
    height: 100%;
  }
}
`;

export const tdStyle = {
  width: "86px",
};

export const StyledIMG = styled.img`
  width: 50%;
`;

export const StyledImage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

export const StyledTimeInput = styled.input`
  display: flex;
  margin: 1%;
  width: 8%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;

export const StyledH3Form = styled.h3`
  color: #62a5a1;
  margin: 2% 0 0 0;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledTimeP = styled.p`
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: #62a5a1;
`;

export const StyledInput = styled.input`
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

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const StyledTextArea = styled.textarea`
  margin: 0;
  resize: none;
  margin-top: 2%;
  width: 100%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 1% 0;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #62a5a1;
`;

export const StyledH1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`;

export const CustomNavLinkList = styled(NavLink)`
  width: 8%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #62a5a1;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  text-decoration: none;
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const CustomButtonList = styled.button`
  width: 20%;
  height: 80%;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 10px 0 10px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 2% 5%;
  background-color: #62a5a1;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const StyledListIngredient = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
`;

export const StyledListIngredientContainer = styled.div`
  display: flex
  width: 100vw;
`;

export const IngredientListP = styled.p`
  margin: 0;
  padding: 1%;
  margin: 1%;
  font-size: 1rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
// `;

export const StyledInputDropdown = styled.input`
  display: flex;
  margin: 1% 0 1% 1%;
  width: 4%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;

export const StyledLabelUnit = styled.label`
  display: flex;
  margin: 0 0.5em 0 0.2em;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: #62a5a1;
`;

export const CustomButtonDropdown = styled.button`
  height: 80%;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 25px 0 25px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 0;
  background-color: #62a5a1;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const DropdownListContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 8%;
  border: 1px solid #62a5a1;
  background-color: #f5f5f5;
  font-family: Roboto;
`;

export const NewRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #62a5a1;
`;

export const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TimeContainer = styled.div`
  display: block;
  margin: 0;
`;

export const CustomButtonNR = styled.button`
  width: 26%;
  height: 52px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #62a5a1;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const CustomNavLink = styled(NavLink)`
  width: 21%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #62a5a1;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  text-decoration: none;
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const ButtonContainer = styled.div`
  width: 91%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4%;
`;

export const RecipeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #62a5a1;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const StyledH3 = styled.h3`
  color: #62a5a1;
  margin: 5% 0 0 0;
`;

export const StyledP = styled.p`
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export const IngredientDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
`;

export const IngredientListDiv = styled.div`
  padding: 1%;
  margin: 1%;
  font-size: 1.5rem;
  border: 1px solid #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const InstructionsP = styled.p`
  margin: 5px 5%;
  font-size: 1.3rem;
  text-align: justify;
`;

export const CustomButton = styled.button`
  width: 30%;
  height: 52px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #62a5a1;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const RecipeDetailsCustomNavLink = styled(NavLink)`
  width: 23%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #62a5a1;
  color: white;
  border: 1px solid #62a5a1;
  font-family: Roboto;
  text-decoration: none;
  margin: 0 2%;

  &:hover {
    background-color: white;
    color: #62a5a1;
    border: 1px solid #62a5a1;
  }
`;

export const RecipeDetailsButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
`;

export const ErrorP = styled.div`
  margin: 1%;
  font-size: 2rem;
  text-align: center;
  color: #a00;
`;
