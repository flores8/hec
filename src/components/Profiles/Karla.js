import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { font, gray, teal, spacing, screen, borderRadius } from "../../utils";

const Pat = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/karla.jpg"
            alt="Karla - Chief Operating Officer, HEC Partners."
            placeholder="blurred"
            width={450}
            height={450}
          />
        </Image>
        <Background>
          <Content>
            <Name>Karla Fisher, Ph.D.</Name>
            <Title>Chief Operating Officer</Title>
            <Bio className="flow">
              <p>
                Karla Fisher brings 22 years of experience in higher education
                leadership, as well as more than a decade of corporate
                experience. Having led transformational initiatives at multiple
                institutions, her expertise lies in helping leaders and teams
                honestly assess their current state, envision future success,
                and create strategic and tactical plans using data-informed,
                interest-based problem solving and inclusive change management.
                She provides team training and support, as well as individual
                coaching and mentoring, recognizing that sustainable change
                begins and ends with people.
              </p>
              <p>
                Karla served as an HLC Accreditation Peer-Reviewer for more than
                a decade. She has been actively involved at the state and
                national levels through active roles with American Association
                of Community Colleges (AACC) Commissions on Marketing/Outreach
                and Transformation; the AACC 21st-Century Initiative; and the
                National Community College Benchmark Project. She graduated from
                the Advance Kansas diversity leadership program in 2011; was
                named the National Council of Instructional Administrators
                (NCIA) Chief Academic Officer of the Year in 2015; and is a 2018
                Aspen Presidential Fellow alum.
              </p>
              <p>
                Karla earned her Bachelor of Arts in English and Master of Arts
                in Communication from St. Mary’s University in San Antonio,
                Texas and a Ph.D. in Educational Administration from The
                University of Texas at Austin.
              </p>
              <p></p>
              <p>Consulting Specialties:</p>
            </Bio>
            <SpecialtyWrapper className="flow">
              <Specialty>Leadership and culture development</Specialty>
              <Specialty>Strategic planning and initiatives</Specialty>
              <Specialty>
                Interest-based problem-solving and negotiation
              </Specialty>
              <Specialty>Data-informed decision-making</Specialty>
              <Specialty>Academic affairs and accreditation</Specialty>
              <Specialty>Institutional effectiveness</Specialty>
            </SpecialtyWrapper>
          </Content>
        </Background>
      </Profile>
    </Container>
  );
};

export default Pat;

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
