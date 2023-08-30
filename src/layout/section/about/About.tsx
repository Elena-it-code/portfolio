import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SubTitle} from "../../../components/SubTitle";
import styled from "styled-components";


export const About = () => {
    return (
        <StyledSectionAbout>
            <SectionTitle>About me</SectionTitle>
            <SubTitle>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it. I'm studying at courses "Web and mobile design interfaces" in IT-Academy. Ready to implement excellent projects with wonderful people.</SubTitle>
        </StyledSectionAbout>
    );
};

const StyledSectionAbout = styled.section`
  min-height: 100vh;
`

// вместо section выдает ошибку TS1005 , EXPETED