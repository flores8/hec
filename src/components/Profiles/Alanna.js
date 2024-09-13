import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import {
  font,
  gray,
  spacing,
  screen,
  borderRadius,
  boxShadow,
} from "../../utils";

const Alanna = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/alanna.jpg"
            alt="Alanna Andersen"
            placeholder="blurred"
            width={450}
            height={450}
            borderRadius={"5px"}
          />
        </Image>
        <Background>
          <Content>
            <Name>Alanna Andersen</Name>
            <Title>Project Manager</Title>
            <Bio className="flow">
              <p>
                Alanna brings a wealth of experience and a diverse skill set to
                her role, showcasing a proven ability to manage staff and
                oversee complex projects from inception to completion. Her
                expertise in implementing effective organizational timelines has
                enhanced scheduling and time management across various
                professions.
              </p>
              <p>
                Prior to joining HEC Partners, Alanna spent five years as a barn
                manager in the equine industry. Her responsibilities included
                administering medication, scheduling appointments for up to 48
                horses, and managing staff while cultivating strong client
                relationships. Additionally, she handled logistics such as hotel
                arrangements, stall assignments, and show schedules for
                trainers, staff, and horses.
              </p>
              <p>
                In the past two years, Alanna has transitioned into the mortgage
                industry, where she excelled in setting up initial loan files.
                She meticulously compiled and organized personal and financial
                information for 14 loan officers and collaborated with external
                financial institutions to gather confidential documentation,
                adhering to industry standards. Her experience in navigating the
                fast-paced and evolving landscape of mortgage compliance has
                honed her analytical and problem-solving skills, enabling her to
                address daily challenges with a fresh perspective.
              </p>
              <p>
                Outside of work, Alanna enjoys spending time at the barn, where
                she teaches horseback riding lessons to children and cares for
                her horses. She also loves playing fetch with her Dachshund,
                Finn or unwind by curling up on the couch with a cup of tea and
                a good book.
              </p>
            </Bio>
          </Content>
        </Background>
      </Profile>
    </Container>
  );
};

export default Alanna;

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
