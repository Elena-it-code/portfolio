import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Button = styled.button`
    //border: 1px solid ${theme.colors.secondaryBg};
  border-radius: 25px;
  padding: 10px 30px;
  background-color: ${theme.colors.accent};
  margin-top: -5px;

  text-align: center;
  font-family: Gilroy-Bold, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.primaryBg};
`