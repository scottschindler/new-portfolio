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
          I graduated from Lambda School in March of 2020. Since then I've been working on my own side projects and
          doing some freelancing work. Please get in touch if you are looking for a project collaborater, a new employee
          or just to chat! <br></br>
          <br></br> I specialize in Javascript, React, Node.js, MongoDB and Firebase.
        </p>
        {/* <Button as={AnchorLink} href="#contact">
          Let's chat!
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
