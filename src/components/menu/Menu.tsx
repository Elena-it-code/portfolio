import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
            <StyledMenu>
                <ul>
                    <StyledListItem>
                        <Link href="#">Home</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="#">About me</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="#">Skills</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="#">Portfolio</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="#">Contacts</Link>
                    </StyledListItem>
                </ul>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
 ul {
   display: flex;
   gap: 145px;
   justify-content: space-between;
   //justify-items: stretch;
   margin-top: 10px;
   
   position: relative;
   
   &::before {
     content: "";
     display: inline-block;
     width: 940px;
     height: 2px;
     background-color: ${theme.colors.secondaryBg};
     
     position: absolute;
     left: 50%;
     bottom: -25px;
     transform: translateX(-50%);
   }
 }
`
const StyledListItem = styled.li`
  
`

const Link = styled.a`
  color: #828282;
  font-family: 'Gilroy', sans-serif;
  font-size: 18px;
  font-weight: bold;

  &:active {
    color: ${theme.colors.font};
  }
  
  &:hover {
    color: ${theme.colors.accent};/* Цвет ссылки при наведении */
  }
`


