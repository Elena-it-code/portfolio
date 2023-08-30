import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
<StyledCopyright>Like me on LinkedIn, Instagram, Behance, Dribble</StyledCopyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
display: flex;
  justify-content: center;
`
const StyledCopyright = styled.small`

`