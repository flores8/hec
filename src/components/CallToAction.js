import React from "react";
import styled from "styled-components";
import { gray, spacing, font, width } from "../utils";
import ComplianceReport from "../images/svg/compliance-report.svg";
import Form from "../components/Forms/LeadGen";

const CallToAction = () => {
  return (
    <OutsideWrapper>
      <InsideWrapper>
        <ComplianceReport className="svg" />
        <Title>See an example compliance plan</Title>
        <Subtitle>
          Sign up to get an idea of what kind of compliance plan we could put
          together for your institution.
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
  margin-block-start: ${spacing.s10};
  padding-block-end: ${spacing.s8};
`;

const InsideWrapper = styled.div`
  max-width: ${width.lg};
  margin: auto;
  .svg {
    max-width: 6rem;
    margin: auto;
    margin-block-start: ${spacing.s10};
  }
`;

const Title = styled.p`
  margin-block-start: ${spacing.s4};
  font-weight: bold;
  font-size: ${font.s7};
`;

const Subtitle = styled.p`
  font-size: ${font.s5};
  margin-block-start: ${spacing.s6};
  padding-inline-start: ${spacing.s12};
  padding-inline-end: ${spacing.s12};
`;
