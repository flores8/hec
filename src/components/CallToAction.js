import React from "react";
import styled from "styled-components";
import { gray, spacing, font, width, screen } from "../utils";
import EmergencyRelief from "../images/svg/heerf.svg";
import Form from "../components/Forms/LeadGen";

const CallToAction = () => {
  return (
    <OutsideWrapper>
      <InsideWrapper className="animate">
        <EmergencyRelief className="svg" />
        <Title>
          Need help with your Higher Education Emergency Relief Funding (HEERF)?
        </Title>
        <Subtitle>
          Are you struggling with reporting or Administering. your CARES, CRRSA,
          or ARPA money? We can help. Sign up to get a free consultation.
        </Subtitle>
        <Form button={"Get a free consultation"} />
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
    max-width: 20rem;
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
