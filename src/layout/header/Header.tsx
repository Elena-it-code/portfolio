import React from 'react';
import styled from "styled-components";
//import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"center"} >
                {/*<Logo/>*/}
                <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #FFFFFF;
  padding: 20px 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999999;
`
