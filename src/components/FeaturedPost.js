import React from "react";
import styled, { keyframes } from "styled-components";
import { gray, borderRadius, spacing, font, screen } from "../utils";
import { StaticImage } from "gatsby-plugin-image";
import CircleBackground from "../images/svg/dot-circle-yellow.svg";
import Button from "../components/Button";

const FeaturedPost = () => {
  return (
    <PostWrapper>
      <ImageWrapper>
        <StaticImage
          src="../images/college-student.jpg"
          alt="Ensure your higher education institution is following federal laws concerning financial aid."
          placeholder="blurred"
        />
        <CircleBackground className="dotted-circle" />
      </ImageWrapper>
      <TextWrapper className="flow">
        <PostHeadline>
          Is your institution following federal laws concerning financial aid?
        </PostHeadline>
        <PostSubtitle>
          You might be surprised how many institutions are breaking federal laws
          unknowingly.
        </PostSubtitle>
        <Button />
      </TextWrapper>
    </PostWrapper>
  );
};

export default FeaturedPost;

const FadeInAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const PostWrapper = styled.section`
  background: ${gray.four};
  border-radius: ${borderRadius.large};
  margin-inline-start: ${spacing.s8};
  margin-block-start: ${spacing.s10};
  position: relative;
  color: ${gray.white};
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  animation-name: ${FadeInAnimation};
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
  @media ${screen.lg} {
    grid-template-columns: repeat(2, 1fr);
    margin-block-start: ${spacing.s8};
  }
`;
const ImageWrapper = styled.div`
  width: 85%;
  @media ${screen.lg} {
    width: 100%;
  }
  position: relative;
  right: ${spacing.s7};
  bottom: ${spacing.s7};
  z-index: 1;
  .gatsby-image-wrapper {
    border-radius: ${borderRadius.large};
  }
  svg {
    width: 75%;
    position: absolute;
    z-index: -1;
    right: -10%;
    bottom: 10%;
    transform: rotate(-90deg);
    @media ${screen.lg} {
      right: 10%;
      bottom: -7%;
      transform: rotate(0deg);
    }
  }
`;

const TextWrapper = styled.div`
  padding: ${spacing.s7};
  @media ${screen.lg} {
    padding-inline-start: 0;
  }
`;

const PostHeadline = styled.p`
  font-size: ${font.s6};
  font-weight: bold;
  line-height: 1.3;
`;

const PostSubtitle = styled.p`
  font-size: ${font.s20};
`;
