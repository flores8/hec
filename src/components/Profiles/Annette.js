import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import {
  font,
  gray,
  spacing,
  screen,
  borderRadius,
  teal,
  boxShadow,
} from "../../utils";

const Annette = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/annette.jpg"
            alt="Annette Linders - Chief Executive Officer, HEC Partners"
            placeholder="blurred"
            width={450}
            height={450}
          />
        </Image>
        <Background>
          <Content>
            <Name>Annette Linders</Name>
            <Title>Chief Executive Officer</Title>
            <Bio className="flow">
              <p>
                Annette has almost 25 years of experience in higher education
                administration with a demonstrated track record in successful
                leadership and executive roles, including financial aid
                administration, compliance, operations, and automation. Annette
                is also skilled in grant writing and grant administration from
                various funding sources and organizations.
              </p>
              <p>
                Annette has extensive experience in several leadership roles in
                higher education and non-profit organizations, as well as
                athletics administration at the Division I, II, and III level,
                master in Division I relative to all aspects of NCAA and
                conference governance over federal, state, and institutional
                financial aid and scholarships, master of NCAA legislative
                authority and operating bylaws, as well as comprehensive
                experience and expert knowledge in athletic equivalency and head
                count sports, calculations, and exemptions.
              </p>
              <p>
                Annette has proven success in implementing and maintaining
                positive relationships with all relative constituents,
                communities, scholarship donors, students from diverse
                populations, student-athletes, and university officials. Annette
                has been commended throughout her professional career for
                outstanding interpersonal communication, organization, and
                problem solving skills, as well as the ability to work
                constructively under pressure while successfully meeting
                deadlines.
              </p>
              <p>Consulting Specialties:</p>
            </Bio>
            <SpecialtyWrapper className="flow">
              <Specialty>Federal Student Aid (Title IV)</Specialty>
              <Specialty>Enrollment Services</Specialty>
              <Specialty>
                Emergency relief funding, administration, and compliance
              </Specialty>
              <Specialty>
                Athletic association and conference compliance
              </Specialty>
              <Specialty>
                Institutional effectiveness and data analysis
              </Specialty>
              <Specialty>
                Internal / external audit and program reviews
              </Specialty>
            </SpecialtyWrapper>
          </Content>
        </Background>
      </Profile>
    </Container>
  );
};

export default Annette;

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
    border-radius: ${borderRadius.large};
    object-fit: cover;
    box-shadow: ${boxShadow.lg};
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
