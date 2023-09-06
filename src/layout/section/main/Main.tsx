import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/main_screen/main_screen.png" // !!! в React путь к картинке мы должны сохранить в переменную и потом использовать ее в пути (в src)
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <Name>Denis<br/>Novik</Name>
                    </div>

                    <div>
                        <MainTitle>UX | UI designer<br/>24 years old, Minsk</MainTitle>
                    </div>

                    <div>
                        <Language><Link href={"#"}>RU</Link> | <Link href={"#"}>ENG</Link></Language>
                    </div>
                    {/*</FlexWrapper>*/}

                    {/*<FlexWrapper align={"center"} justify={"space-around"}>*/}
                    {/*<div>*/}
                    <Photo src={photo} alt=""/>
                    {/*</div>*/}
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.div`
  display: flex;
  min-height: 780px;

`

const MainTitle = styled.h1` // создали стилизованную компоненту для стилизации нашего тэга <h1>UX | UI designer 24 years old, Minsk</h1>
  color: var(--Black, #070707);
  font-family: Gilroy-Medium, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-top: 40px;
  margin-left: -50px;

`

const Name = styled.h2` // создали стилизованную компоненту для стилизации нашего тэга <h2>Denis Novik</h2>
  font-size: 48px;
  font-weight: 600;
  margin-left: -15px;
  
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.secondaryBg};
  
    &:active {
      color: ${theme.colors.font};
    }
  
    &:hover {
    color: ${theme.colors.accent};
  }
`

const Language = styled.h2` // создали стилизованную компоненту для стилизации нашего тэга <h2>RU | ENG</h2>
  color: ${theme.colors.secondaryBg};
  font-size: 16px;
  font-weight: 400;
  margin-top: 115px;
  margin-right: -60px;
  
  transform-origin: top left;
  transform: rotate(-90deg);
  
`

    // создали переменную с именем Photo для нашей картинки, чтобы указать путь к ней
const Photo = styled.img`
  width: 940px;
  height: 390px;
  margin-top: -90px;

  //margin-left: -15px;
  
`
