import React from "react";
import styled, { keyframes } from "styled-components";
import { spacing, font, gray, blue, yellow, red, teal, screen } from "../utils";
import SlideUpLink from "../components/Links/SlideUpLink";

const Hero = ({
  headline,
  headlinePeriod,
  headlinePunctuation,
  subtitle,
  includeLink,
  link,
  linkTitle,
  arrow,
}) => {
  return (
    <Wrapper>
      <Content className="flow">
        <Headline>
          {headline}
          <span className={headlinePeriod}>{headlinePunctuation}</span>
        </Headline>
        <Subtitle>
          {subtitle}
          {includeLink === "true" && (
            <SlideUpLink link={link} title={linkTitle} arrow={arrow} />
          )}
        </Subtitle>
      </Content>
    </Wrapper>
  );
};

export default Hero;

const FadeInUpAnimation = keyframes`
0% {
  opacity: 0;
  transform: translate3d(0,50px,0);
}
100% {
  opacity: 1;
  transform: none;
}
`;

export const Wrapper = styled.section`
  --flow-space: ${spacing.s7};
  padding-block-start: ${spacing.s8};
  display: grid;
  grid-template-columns: 1fr;
  @media ${screen.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: ${spacing.s9};
  }
`;
export const Content = styled.div`
  --flow-space: ${spacing.s7};
`;

export const Headline = styled.h1`
  font-size: ${font.s9};
  line-height: 1;
  color: ${gray.five};
  animation-name: ${FadeInUpAnimation};
  animation-duration: 1s;
  animation-fill-mode: both;
  span {
    &.blue {
      color: ${blue.five};
    }
    &.yellow {
      color: ${yellow.five};
    }
    &.red {
      color: ${red.five};
    }
    &.teal {
      color: ${teal.five};
    }
  }
`;

export const Subtitle = styled.p`
  animation-name: ${FadeInUpAnimation};
  animation-delay: 0.75s;
  animation-duration: 1s;
  animation-fill-mode: both;
  font-size: ${font.s20};
  color: ${gray.five};
`;
