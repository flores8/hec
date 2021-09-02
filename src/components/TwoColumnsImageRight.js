import React from "react";
import styled from "styled-components";
import { spacing, font, screen, gray, borderRadius } from "../utils";
import TitleIx from "../images/svg/services/title-ix.svg";
import Ada from "../images/svg/services/ada-504.svg";
import HumanResources from "../images/svg/services/human-resources.svg";
import StudentAid from "../images/svg/services/student-aid.svg";
import EmergencyRelief from "../images/svg/services/emergency-relief-funding.svg";
import Ie from "../images/svg/services/ie.svg";
import Ferpa from "../images/svg/services/ferpa.svg";

const TwoColumnsImageRight = ({ headline, description, image }) => {
  return (
    <ColumnWrapper className="animate">
      <Column className="image">
        <ImageWrapper>
          {image === "title-ix" && <TitleIx />}
          {image === "ada-504" && <Ada />}
          {image === "human-resources" && <HumanResources />}
          {image === "student-aid" && <StudentAid />}
          {image === "emergency-relief-funding" && <EmergencyRelief />}
          {image === "ie" && <Ie />}
          {image === "ferpa" && <Ferpa />}
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
  text-align: center;
  @media ${screen.md} {
    text-align: left;
  }
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
  margin: ${spacing.s10} auto 0;
  text-align: center;
  width: 50%;
  @media ${screen.md} {
    width: 100%;
    margin-block-start: 0;
  }
  z-index: 1;
  .gatsby-image-wrapper {
    border-radius: ${borderRadius.large};
  }
  svg {
    width: 100%;
    height: auto;
  }
`;
