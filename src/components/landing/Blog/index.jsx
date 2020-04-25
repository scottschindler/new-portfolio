import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Blog = () => (
  <Wrapper id="blog">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Scott - a software engineer!" />
      </Thumbnail>
      <Details>
        <h1>Blog</h1>
        <p>
          I love to write! My favorite topics include business, startups, programming and more. As of 4/20/2022, I have
          been putting out at least one article every 2 weeks. I like to publish on Medium.com. Hit the button below to
          check out my writings!
        </p>
        <Button>
          <a href="https://medium.com/@scottschindler29">View Blog</a>
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
