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

const Robert = () => {
  return (
    <Container>
      <Profile>
        <Image>
          <StaticImage
            src="../../images/robert.jpg"
            alt="Robert"
            placeholder="blurred"
            width={450}
            height={450}
            borderRadius={"5px"}
          />
        </Image>
        <Background>
          <Content>
            <Name>Robert</Name>
            {/* <Title>??</Title> */}
            <Bio className="flow">
              <p>
                Robert has managed mid to large size projects— managing multiple
                calendars, keeping administrative notes, scheduling training
                dates, and managing project recordkeeping. Robert’s experience
                includes acting as project manager for the 2020 Title IX
                regulatory implementation for a ten-community college district
                with over 200,000 students and 10,000 employees. Robert holds a
                Bachelor's of Science in Psychology and Bachelor's of Science in
                Women's Studies.
              </p>
            </Bio>
          </Content>
        </Background>
      </Profile>
    </Container>
  );
};

export default Robert;

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
