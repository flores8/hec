import React from "react";
import styled from "styled-components";
import { spacing, font, screen, gray, borderRadius } from "../utils";
import CivilRights from "../images/svg/services/civil-rights.svg";
import TitleVi from "../images/svg/services/title-vi.svg";
import Compliance from "../images/svg/services/regulatory-compliance.svg";
import PolicyDevelopment from "../images/svg/services/policy-development.svg";
import Enrollment from "../images/svg/services/enrollment.svg";

const TwoColumnsImageRight = ({ headline, description, image }) => {
  return (
    <ColumnWrapper className="animate">
      <Column>
        <ImageWrapper>
          {image === "civil-rights" && <CivilRights />}
          {image === "title-vi" && <TitleVi />}
          {image === "regulatory-compliance" && <Compliance />}
          {image === "policy-development" && <PolicyDevelopment />}
          {image === "enrollment" && <Enrollment />}
        </ImageWrapper>
      </Column>
      <Column>
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
`;

const Header = styled.h3`
  font-size: ${font.s5};
  line-height: 1.2;
  @media ${screen.md} {
    margin-block-start: ${spacing.s7};
  }
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
`;
