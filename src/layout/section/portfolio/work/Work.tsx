import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


type WorkPropsType = {
    src: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Link href={"#"}>{props.text}</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 940px;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-decoration-line: underline;
`
const Image = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
  
`
const Link = styled.a`
  display: block;  
  text-align:center;
  margin-top: 35px;
  margin-bottom: 90px;
  color: ${theme.colors.font};
`