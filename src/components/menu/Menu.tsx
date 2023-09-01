import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Separator} from "../../layout/section/separator/Separator";

export const Menu = () => {
    return (
            <StyledMenu>
                <ul>
                    <StyledListItem>
                        <Link href="">Home</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="">About me</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="">Skills</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="">Portfolio</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link href="">Contacts</Link>
                    </StyledListItem>
                </ul>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
 ul {
   display: flex;
   gap: 150px;
   justify-content: space-between;
   //justify-items: stretch;
   padding: 30px 0px;
   border-bottom: 2px solid ${theme.colors.secondaryBg};
 }
`
const StyledListItem = styled.li`
  
`

const Link = styled.a`
  color: #828282;
  font-family: 'Gilroy', sans-serif;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    color: ${theme.colors.accent};/* Цвет ссылки при наведении */
  }
`


