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
                       title={"Html5"}/>

                <Skill iconId ={"css"}
                       title={"Css3"}/>

                <Skill iconId ={"js"}
                       title={"Javascript"}/>

                <Skill iconId ={"react"}
                       title={"React"}/>

                <Skill iconId ={"greensock"}
                       title={"GreenSock"}/>

                <Skill iconId ={"git"}
                       title={"Git"}/>

                <Skill iconId ={"github"}
                       title={"Github"}/>

                <Skill iconId ={"vscode"}
                       title={"Visual Studio Code"}/>
            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  margin-bottom: -30px;
`