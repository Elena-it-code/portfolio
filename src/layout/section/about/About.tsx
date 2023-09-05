import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SubTitle} from "../../../components/SubTitle";
import styled from "styled-components";
import {Container} from "../../../components/Container";


export const About = () => {
    return (
        <StyledSectionAbout>
            <Container>
                <SectionTitle>About me</SectionTitle>
                    <SubTitle>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.</SubTitle>
                        <SubTitle>I'm studying at courses "Web and mobile design<br/>interfaces" in IT-Academy.</SubTitle>
                            <SubTitle>Ready to implement excellent projects<br/>with wonderful people.</SubTitle>
                </Container>
            </StyledSectionAbout>
    );
};

const StyledSectionAbout = styled.section`
    margin-bottom: -30px;
`
