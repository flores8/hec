import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { font, gray, spacing, screen, borderRadius } from "../../utils";

const Pat = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/patrick.jpg"
            alt="Patrick Burnham - Vice President of Athletic Client Services, HEC Partners."
            placeholder="blurred"
            width={450}
            height={450}
          />
        </Image>
        <Background>
          <Content>
            <Name>Patrick Burnham</Name>
            <Title>VP of Athletic Client Services</Title>
            <Bio className="flow">
              <p>
                Pat brings over 10 years of experience working in Division I
                athletics and pro football. While at the University of South
                Florida, Pat worked as the Director Player Development for the
                football program. In that role he worked with all departments
                within the university system including Athletics Compliance,
                Financial Aid, Admissions, Student Health Services, Student
                Judicial Affairs, Student Housing and Academic Services as it
                related to the football program. In that role he was responsible
                for making sure the football program was compliant with all
                universities policies and procedures as it related to each
                department. He also spent three years at the University of South
                Carolina in Recruiting Operations for the football program. Pat
                also spent a year in football operations with the Alliance of
                American Football.
              </p>
              <p>
                He also has five years of experience as a member of the media
                covering college athletics. Pat spent two years covering college
                football recruiting for Fox Sports and Scout.com. He also has
                spent the last three years working for a website the covers
                Florida State athletics covering all sports.
              </p>
              <p>
                In addition to his experience in athletics, Pat also brings ten
                years of experience in sales and marketing where he had a
                successful stint as an Account Executive for Southeastern
                Freight Lines. At Southeastern, Pat was responsible for not only
                acquiring new business but also problem solving for a customer
                base that consisted of up to 175 accounts.{" "}
              </p>
              <p>
                Pat graduated from Florida State University with a degree in
                Social Science with a concentration in Political Science in
                History. He also attended graduate school at the University of
                South Carolina.
              </p>
            </Bio>
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
