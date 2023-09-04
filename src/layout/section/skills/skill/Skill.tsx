import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";


type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            {/*<Icon iconId={props.iconId}/>*/}
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 22%;
  //background-color: #eee4b4;
  margin: 10px;
  text-align: center;
`
const SkillTitle = styled.h3`

`