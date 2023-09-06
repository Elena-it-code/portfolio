import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"center"}>
                    <StyledCopyright>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</StyledCopyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  ///display: flex;
  //justify-content: center;
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