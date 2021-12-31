import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { font, gray, spacing, screen, borderRadius, teal } from "../../utils";

const Lauralee = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/lauralee.jpg"
            alt="Lauralee Flores - Chief Operating Officer, HEC Partners."
            placeholder="blurred"
            width={450}
            height={450}
          />
        </Image>
        <Background>
          <Content>
            <Name>Lauralee Flores</Name>
            <Title>Chief Operating Officer</Title>
            <Bio className="flow">
              <p>
                Lauralee Flores is an accomplished product designer, front-end
                developer, usability professional, and entrepreneur. She has
                been designing and creating software for the past decade.
              </p>
              <p>
                She has extensive experience planning, coordinating, and
                overseeing projects while ensuring they are completed on time,
                within both budget and scope.
              </p>
              <p>Consulting Specialties:</p>
            </Bio>
            <SpecialtyWrapper className="flow">
              <Specialty>Technology Implications in Compliance</Specialty>
              <Specialty>External Communications</Specialty>
              <Specialty>Project / Program Management</Specialty>
              <Specialty>Business Process</Specialty>
              <Specialty>Strategic Online Program Management</Specialty>
            </SpecialtyWrapper>
          </Content>
        </Background>
      </Profile>
    </Container>
  );
};

export default Lauralee;

const Container = styled.section`
  margin-block-start: ${spacing.s11};
  @media ${screen.lg} {
    margin-block-start: ${spacing.s9};
  }
  &.space-top {
    margin-block-start: ${spacing.s9};
  }
  @media ${screen.md} {
    margin-block-start: 0;
    padding-inline-start: ${spacing.s9};
    padding-inline-end: ${spacing.s9};
  }
`;

const Profile = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-block-start: ${spacing.s7};
  position: relative;
`;

const Image = styled.div`
  position: absolute;
  max-width: 300px;
  left: ${spacing.s8};
  top: -50px;
  @media ${screen.sm} {
    top: 0;
  }
  @media ${screen.lg} {
    position: static;
    max-width: none;
    grid-column: 1 / 3;
    grid-row: 1;
    padding: ${spacing.s9} ${spacing.s7} 0 0;
  }

  .gatsby-image-wrapper {
    object-fit: cover;
    box-shadow: 4px 4px 13px 6px rgba(0, 0, 0, 0.22);
    border-radius: ${borderRadius.large};
    overflow: hidden;
  }
`;
const Background = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  margin-block-start: ${spacing.s10};
  @media ${screen.lg} {
    grid-column: 2 / -1;
    grid-row: 1;
    margin-block-start: ${spacing.s5};
  }
  background: ${gray.offwhite};
  border-radius: ${borderRadius.large};
  min-height: ${spacing.s12};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Content = styled.div`
  grid-column: 1 / -1;
  padding: ${spacing.s12} ${spacing.s8} ${spacing.s8};
  @media ${screen.sm} {
    padding: ${spacing.s14} ${spacing.s8} ${spacing.s8};
  }
  @media ${screen.md} {
    padding: ${spacing.s13} ${spacing.s8} ${spacing.s8};
  }
  @media ${screen.lg} {
    grid-column: 2 / -1;
    padding: ${spacing.s9} ${spacing.s5} ${spacing.s8} 0;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: ${font.s7};
  line-height: 1;
`;
const Title = styled.p`
  font-size: ${font.s20};
  color: ${gray.five};
  text-transform: uppercase;
  margin-block-start: ${spacing.s2};
`;
const Bio = styled.div`
  margin-block-start: ${spacing.s2};
  p {
    font-size: ${font.s20};
  }
`;

const SpecialtyWrapper = styled.ul`
  padding-left: ${spacing.s6};
`;
const Specialty = styled.li`
  font-size: ${font.s20};
  margin-block-start: ${spacing.s2};
  margin-inline-start: ${spacing.s4};
  --flow-space: ${spacing.s4};
  &:before {
    content: "\u2713";
    color: ${teal.four};
    margin-inline-end: ${spacing.s2};
  }
`;
