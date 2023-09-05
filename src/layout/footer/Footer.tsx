import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
<StyledCopyright>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</StyledCopyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: -90px;
  margin-bottom: 120px;
`
const StyledCopyright = styled.small`
  text-align: center;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.secondaryBg};
`