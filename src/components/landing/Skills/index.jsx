import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Scott and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
        <Button as={AnchorLink} href="#contact">
          View Blog
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
