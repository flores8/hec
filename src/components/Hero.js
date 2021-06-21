import React from "react";
import styled, { keyframes } from "styled-components";
import { spacing, font, gray, blue } from "../utils";
import SlideUpLink from "../components/SlideUpLink";

const Hero = () => {
  return (
    <Wrapper>
      <Content className="flow">
        <Headline>
          Compliance matters<span>.</span>
        </Headline>
        <Subtitle>
          We are a higher education consultancy and training partner to maintain
          compliance and administration across your institution, so you can
          focus on your students.
          <SlideUpLink link={"/about"} title={"Learn more"} arrow={"true"} />
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
  padding: ${spacing.s9};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  --flow-space: ${spacing.s7};
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
    color: ${blue.five};
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
