import React from 'react';
import styled from "styled-components";
import {text} from "stream/consumers";


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
  background-color: #eeec3a;
  max-width: 940px;
  width: 100%;
  margin-bottom: 100px;
`
const Image = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
  
`
const Link = styled.a`
  //justify-content: center;
  display: block;  
  text-align:center;
  margin-top: 45px;
`