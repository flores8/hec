import React from "react";
import styled from "styled-components";
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
  animation-name: fade-in-up;
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
  animation-name: fade-in-up;
  animation-delay: 0.75s;
  animation-duration: 1s;
  animation-fill-mode: both;
  font-size: ${font.s20};
  color: ${gray.five};
`;

export const LongSubtitle = styled.p`
  animation-name: fade-in-up;
  animation-delay: 0.75s;
  animation-duration: 1s;
  animation-fill-mode: both;
  font-size: ${font.s20};
  color: ${gray.five};
`;
