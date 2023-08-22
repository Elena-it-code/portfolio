import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

// type iconPropsType ={
//     separator: string
// }
export const Separator = () => {
    return (
        <StyledSeparator>
        <Icon iconId={`separator`} />
        </StyledSeparator>
    );
};

const StyledSeparator = styled.div`
display: flex;
  justify-content: center;
`
    // <!--        <svg
    //     xmlns="http://www.w3.org/2000/svg" width="942" height="2" viewBox="0 0 942 2"
    //     fill="none">-->

