import React from "react";
import styled from "styled-components";
import { gray, spacing, font, width, screen } from "../utils";
import ComplianceReport from "../images/svg/compliance-report.svg";
import Form from "../components/Forms/LeadGen";

const CallToAction = () => {
  return (
    <OutsideWrapper>
      <InsideWrapper className="animate">
        <ComplianceReport className="svg" />
        <Title>See an example of our work</Title>
        <Subtitle>
          Do you know your instituation's compliance health? Sign up to get an
          idea of what we can do to support your institution's compliance needs.
        </Subtitle>
        <Form button={"See Compliance Plan"} />
      </InsideWrapper>
    </OutsideWrapper>
  );
};

export default CallToAction;

const OutsideWrapper = styled.section`
  background: ${gray.offwhite};
  text-align: center;
  margin-block-start: ${spacing.s8};
  padding-block-start: ${spacing.s8};
  padding-block-end: ${spacing.s9};
`;

const InsideWrapper = styled.div`
  max-width: ${width.lg};
  margin: auto;
  .svg {
    max-width: 10rem;
    margin: auto;
  }
`;

const Title = styled.p`
  margin-block-start: ${spacing.s4};
  font-weight: bold;
  font-size: ${font.s7};
  line-height: 1.2;
  padding-inline-start: ${spacing.s4};
  padding-inline-end: ${spacing.s4};
`;

const Subtitle = styled.p`
  font-size: ${font.s5};
  margin-block-start: ${spacing.s6};
  padding-inline-start: ${spacing.s8};
  padding-inline-end: ${spacing.s8};
  @media ${screen.md} {
    padding-inline-start: ${spacing.s10};
    padding-inline-end: ${spacing.s10};
  }
`;
