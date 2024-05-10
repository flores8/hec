import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import styled from "styled-components";
import { font, gray, spacing, screen, width } from "../utils";
import { PageHeadline } from "../components/Headlines";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";
import Annette from "../components/Profiles/Annette";
import Melissa from "../components/Profiles/Melissa";

const About = () => {
  return (
    <>
      <Seo title="About us" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"About us"}
            headlinePunctuation={"."}
            headlinePeriod={"yellow"}
            subtitle={
              "It's all in the name. When it comes to compliance, every institution needs a game plan. Setting direction. Building capacity. Due diligence, assessment, assurance. At HEC Game Plan, we demystify compliance and advance administrative proficiency across higher education."
            }
            includeLink={"false"}
          />
          <Container>
            <PageHeadline>
              A little more about our values and services.
            </PageHeadline>
          </Container>
          <Subtitle className="flow">
            <p>
              We care about your students, your institution, your faculty and
              staff, and your institutional goals.
            </p>
            <p>Our services are always tailored to your institution’s needs.</p>
            <p>
              We offer support with Title IV compliance, remote staffing on an
              interim short or long-term basis, process evaluations and
              compliance audits, policy development/review, training development
              and implementation, and communication strategies.
            </p>
            <p>
              We have combined experience of over 35 years in higher education
              administration, compliance, and training. We take the confusion
              out of compliance!
            </p>
          </Subtitle>
          <Container className="space-top">
            <PageHeadline>Leadership Team</PageHeadline>
          </Container>
          <Annette />
          <Melissa />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default About;

const Subtitle = styled.section`
  animation-name: fade-in-up;
  animation-delay: 0.75s;
  animation-duration: 1s;
  animation-fill-mode: both;
  --flow-space: ${spacing.s4};
  max-width: ${width.xlg};
  margin-block-start: ${spacing.s7};
  @media ${screen.md} {
    padding-inline-start: ${spacing.s9};
    column-count: 2;
    column-gap: ${spacing.s10};
  }
  p {
    font-size: ${font.s20};
    color: ${gray.five};
  }
`;

const Container = styled.section`
  margin-block-start: ${spacing.s9};
  &.space-top {
    margin-block-start: ${spacing.s9};
  }
  @media ${screen.md} {
    margin-block-start: 0;
    padding-inline-start: ${spacing.s9};
    padding-inline-end: ${spacing.s9};
  }
`;
