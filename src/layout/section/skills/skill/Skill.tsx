import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


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
  width: 200px;
  padding: 30px 10px;
  text-align: center;
`
const SkillTitle = styled.h4`
  font-family: Gilroy-Bold, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.secondaryBg};
`