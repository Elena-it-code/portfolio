import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SubTitle} from "../../../components/SubTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "./Button";
import {Container} from "../../../components/Container";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>Contacts</SectionTitle>
                <SubTitle>Want to know more or just chat?<br/> You are welcome!</SubTitle>
                <Button type={"submit"}>Send message</Button>

                    <SocialList>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40px 40px"} iconId={"linkedin"} />
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40px 40px"} iconId={"instagram"} />
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40px 40px"} iconId={"behance"} />
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon height={"40px"} width={"40px"} viewBox={"0 0 40px 40px"} iconId={"surface"} />
                            </SocialLink>
                        </SocialItem>

            </SocialList>
            </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    
`

const SocialList = styled.ul`
 display: flex;
gap: 60px;

`

const SocialItem = styled.li`
  list-style-type: none;
  margin-top: 90px;
  
`

const SocialLink = styled.a`

`
