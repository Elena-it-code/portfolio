import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/main_screen/main_screen.png" // !!! в React путь к картинке мы должны сохранить в переменную и потом использовать ее в пути (в src)
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Name>Denis Novik</Name>
                </div>

                <div>
                    <MainTitle>UX | UI designer 24 years old, Minsk</MainTitle>
                </div>

                <div>
                    <Language>RU | ENG</Language>
                </div>
            </FlexWrapper>

            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Photo src={photo} alt=""/>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh; // на всю высоту экрана будет наш стилизованный компонент
  background-color: aliceblue;
  
`
const MainTitle = styled.h1` // создали стилизованную компоненту для стилизации нашего тэга <h1>UX | UI designer 24 years old, Minsk</h1>
  
`
const Name = styled.h2` // создали стилизованную компоненту для стилизации нашего тэга <h2>Denis Novik</h2>
  
`
const Language = styled.h2` // создали стилизованную компоненту для стилизации нашего тэга <h2>RU | ENG</h2>
  //transform-origin: top left;
  //transform: rotate(-90deg);
`


    // создали переменную с именем Photo для нашей картинки, чтобы указать путь к ней
const Photo = styled.img`
  width: 940px;
  height: 390px;
  flex-shrink: 0;
`
