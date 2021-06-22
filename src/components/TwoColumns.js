import React from "react";
import styled from "styled-components";
import { width, spacing, font, screen, gray } from "../utils";
import Svgs from "./Svgs";
import BorderBottomLink from "./Links/BorderBottomLink";

const TwoColumns = ({
  svg1,
  svg2,
  headline1,
  headline2,
  description1,
  description2,
  link1,
  linkTitle1,
  linkColor1,
  link2,
  linkTitle2,
  linkColor2,
}) => {
  return (
    <ColumnWrapper>
      <Column>
        <Svgs name={svg1} />
        <Header>{headline1}</Header>
        <Description>{description1}</Description>
        <BorderBottomLink link={link1} title={linkTitle1} color={linkColor1} />
      </Column>
      <Column>
        <Svgs name={svg2} />
        <Header>{headline2}</Header>
        <Description>{description2}</Description>
        <BorderBottomLink link={link2} title={linkTitle2} color={linkColor2} />
      </Column>
    </ColumnWrapper>
  );
};

export default TwoColumns;

const ColumnWrapper = styled.section`
  max-width: ${width.xlg};
  margin: auto;
  margin-block-start: ${spacing.s10};
  display: grid;
  grid-template-columns: 1fr;
  @media ${screen.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-gap: ${spacing.s9};
  @media ${screen.md} {
    grid-gap: ${spacing.s11};
  }
  @media ${screen.lg} {
    grid-gap: ${spacing.s13};
  }
`;

const Column = styled.div`
  color: ${gray.five};
  .header-visual {
    width: 20%;
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
