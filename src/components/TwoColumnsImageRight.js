import React from "react";
import styled from "styled-components";
import { spacing, font, screen, gray, borderRadius } from "../utils";

const TwoColumnsImageRight = ({ headline, description }) => {
  return (
    <ColumnWrapper className="animate">
      <Column className="image">
        <ImageWrapper>
          <p>image here...</p>
        </ImageWrapper>
      </Column>
      <Column className="content">
        <Header>{headline}</Header>
        <Description>{description}</Description>
      </Column>
    </ColumnWrapper>
  );
};

export default TwoColumnsImageRight;

const ColumnWrapper = styled.section`
  display: grid;
  align-items: center;
  grid-gap: ${spacing.s6};
  grid-template-columns: 1fr;
  @media ${screen.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: ${spacing.s9};
    grid-gap: ${spacing.s9};
  }
`;

const Column = styled.div`
  color: ${gray.five};
  .header-visual {
    width: 20%;
  }
  @media ${screen.md} {
    grid-row: 1;
    &.image {
      grid-column: 2;
    }
    &.content {
      grid-column: 1;
    }
  }
`;

const Header = styled.h3`
  margin-block-start: ${spacing.s7};
  font-size: ${font.s5};
  line-height: 1.2;
`;

const Description = styled.p`
  margin-block-start: ${spacing.s5};
  font-size: ${font.s20};
`;

const ImageWrapper = styled.div`
  width: 85%;
  @media ${screen.lg} {
    width: 100%;
  }
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
