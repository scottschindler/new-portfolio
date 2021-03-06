import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hey There!</h1>
        <h4>
          I'm Scott. I'm a software engineer who is passionate about product, technology and startups.
          <br></br> <br></br>I specialize in Javascript, React, Node.js, MongoDB and Firebase.
        </h4>
        <Button as={AnchorLink} href="#contact">
          Let's chat!
        </Button>
        .
      </Details>
      <Thumbnail>{/* <img src={dev} alt="I’m Scott and I’m a product manager and front-end engineer!" /> */}</Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
