import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { font, gray, spacing, screen, borderRadius, teal } from "../../utils";

const Melissa = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/melissa.jpg"
            alt="Melissa Flores - Chief Legal Officer, HEC Partners."
            placeholder="blurred"
            width={450}
            height={450}
          />
        </Image>
        <Background>
          <Content>
            <Name>Melissa Flores</Name>
            <Title>Chief Legal Officer</Title>
            <Bio className="flow">
              <p>
                Melissa has been practicing law for over two decades--the last
                12 years has been exclusively in education law. Melissa’s
                expertise lies in protecting civil rights of students and
                employees while balancing policy/procedure adherence, advising
                on employer responsibilities and employee rights related to
                discipline and discharge, managing the interactive process
                related to accommodating students and employees with
                disabilities, and responding to Office for Civil Rights
                complaints and program reviews. Melissa understands the unique
                and diverse needs of academic institutions (both private and
                public, four-year and two-year) and can provide efficient and
                cost-effective legal advice and counsel for institutions with
                limited or no in-house legal teams.
              </p>
              <p>
                Given the financial pressures and heightened regulatory burdens
                imposed upon institutions of higher education, Melissa advises
                on Title IX, Title VI, Title IV, Campus SaVE, Clery, and EDGAR
                Part 86 policy development, practical implementation, and
                on-going internal/external audits and program reviews. Melissa
                also advises on obtaining and maintaining federal financial aid
                under Title IV of the Higher Education Act. Melissa works
                closely with clients to develop comprehensive legal compliance
                programs that address the institution’s particular needs,
                including the various COVID-19 issues institutions of higher
                education currently face. Melissa also updates student handbooks
                and provides comprehensive training on scenarios related to
                student discipline, student complaints of discrimination in the
                classroom, and engaging in the interactive ADA/504 process.
                Melissa conducts investigations of alleged student misconduct
                and recommends options for resolution under existing
                institutional policies.
              </p>
              <p>
                Melissa has served as Chief Legal Officer/General Counsel at
                both two-and four-year, public and private institutions of
                higher education and has served as the Chief Civil Rights
                Officer at a K-12 public school district.
              </p>
              <p>
                Melissa graduated from Brigham Young University in 1994 with a
                degree in English and from the J. Reuben Clark Law School in
                1997. Melissa is currently a PhD candidate at the University of
                Utah’s Education, Culture, and Society Department. When not
                working or studying, Melissa spends time with her extended
                family and her five dogs.
              </p>
              <p>Consulting Specialties:</p>
            </Bio>
            <SpecialtyWrapper className="flow">
              <Specialty>
                Civil rights (Title IX, Title VI, ADA/504, etc.)
              </Specialty>
              <Specialty>Regulatory Compliance</Specialty>
              <Specialty>Human Resources</Specialty>
              <Specialty>Policy Development</Specialty>
            </SpecialtyWrapper>
          </Content>
        </Background>
      </Profile>
    </Container>
  );
};

export default Melissa;

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
    box-shadow: 4px 4px 13px 6px rgba(0, 0, 0, 0.22);
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
