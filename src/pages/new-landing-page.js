import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import styled from "styled-components";
import { spacing, screen } from "../utils";
import SlideUpLink from "../components/Links/SlideUpLink";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";

const Testimonial = () => {
  return (
    <>
      <Seo title="HEC Partners is now HEC Game Plan" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Get a move on"}
            headlinePunctuation={"."}
            headlinePeriod={"teal"}
            includeLink={"false"}
          />
          <Container className="flow">
            <p>When it comes to compliance, we’re on a mission.</p>
            <p>
              We’re expanding our services. We’re launching new technology
              solutions. We’re growing our team to nearly 60 years of experience
              in higher education leadership, administration, compliance, and
              training. All to help you improve administrative proficiency,
              resolve risk, and solve your thorniest compliance predicaments.{" "}
            </p>
            <p>
              HEC Partners is now HEC Game Plan. Come see what’s new at:
              <SlideUpLink
                link={`/index`}
                title={"HEC Game Plan"}
                arrow={"true"}
                color={"yellow"}
              />
            </p>
          </Container>
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default Testimonial;

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
