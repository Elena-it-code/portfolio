import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {SubTitle} from "../../../components/SubTitle";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>Skills</SectionTitle>
            <SubTitle>I work in such programs as</SubTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId ={"html"}
                       title={"html5"}/>

                <Skill iconId ={"css"}
                       title={"css3"}/>

                <Skill iconId ={"js"}
                       title={"javascript"}/>

                <Skill iconId ={"react"}
                       title={"react"}/>

                <Skill iconId ={"greensock"}
                       title={"GreenSock"}/>

                <Skill iconId ={"git"}
                       title={"git"}/>

                <Skill iconId ={"github"}
                       title={"github"}/>

                <Skill iconId ={"vscode"}
                       title={"Visual Studio Code"}/>
            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 690px; // !!! всегда лучше использовать min для блочных элементов !!!
`