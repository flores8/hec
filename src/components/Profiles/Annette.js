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
            borderRadius={"5px"}
          />
        </Image>
        <Background>
          <Content>
            <Name>Annette Linders</Name>
            <Title>Chief Executive Officer</Title>
            <Bio className="flow">
              <p>
                Annette has 25 years of experience in higher education
                administration with a demonstrated track record in successful
                leadership and executive roles in financial aid administration,
                compliance, and operations. Annette’s expertise includes all
                areas of financial aid operations and compliance, system
                automation, streamlined processing and communications to ensure
                optimal student service, while meeting applicable compliance and
                Federal Student Aid administrative capability requirements.
                Annette has helped countless students across the country access
                higher education through financial aid, scholarship, and grant
                opportunities.
              </p>
              <p>
                Annette has extensive experience in higher education, profit and
                non-profit organizations, grant writing and administration,
                veteran’s education benefits, scholarship best practice to
                ensure equity, while meeting the needs of students and
                institutional goals. Annette is skilled in athletics
                administration and compliance with financial aid at the Division
                I, II, and III level, relative to all aspects of federal student
                aid, collegiate associations and conference governance over
                federal, state, and institutional financial aid and
                scholarships. NCAA legislative authority and operating bylaws,
                as well as comprehensive experience and expert knowledge in
                athletic equivalency and head count sports, calculations, and
                exemptions.
              </p>
              <p>
                Annette has proven success in building and maintaining positive
                relationships, commended throughout her professional career for
                outstanding interpersonal communication, organization, and
                problem solving skills, as well as the ability to work
                constructively under pressure while successfully meeting
                deadlines.
              </p>
              <p>
                Annette earned her Bachelor of Science in Psychology from the
                University of South Florida, Master of Business Administration
                from Saint Leo University, and is currently PhD Candidate in
                Higher Education Leadership with Grand Canyon University.
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
    object-fit: cover;
    box-shadow: ${boxShadow.lg};
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
