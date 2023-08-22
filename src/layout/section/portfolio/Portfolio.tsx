import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Work} from "./work/Work";
import fashionStore from "../../../assets/images/portfolio/fashion_web.png"
import reebokStore from "../../../assets/images/portfolio/reebok_web.png"
import braunLandingPage from "../../../assets/images/portfolio/braun_web.png"



export const Portfolio = () => {
    return (
        <StyledPortfolio>

            <SectionTitle>Portfolio</SectionTitle>

            <FlexWrapper justify={"space-around"}>
                    <Work src={fashionStore} text={"Online fashion store - Homepage"}/>
                </FlexWrapper>

            <FlexWrapper justify={"space-around"}>
                <Work src={reebokStore} text={"Reebok Store - Concept"}/>
            </FlexWrapper>

            <FlexWrapper justify={"space-around"}>
                <Work src={braunLandingPage} text={"Braun Landing Page - Concept"}/>
            </FlexWrapper>

        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section` 
    min-height: 100vh;
  background-color: #c8eee9;

`

