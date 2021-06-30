import React from "react";
import styled, { keyframes } from "styled-components";
import NavLinks from "./NavLinks";
import { spacing, width, font, gray, borderRadius, screen } from "../../utils";

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        <Copyright>
          <Text>© 2021 HEC Partners</Text>
        </Copyright>
        <Links>
          <NavLinks />
        </Links>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;

const FadeInAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const FooterWrapper = styled.footer`
  padding-block-start: ${spacing.s8};
  padding-block-end: ${spacing.s8};
`;

const Content = styled.div`
  max-width: ${width.xlg};
  margin: auto;
  text-align: center;
  @media ${screen.md} {
    display: flex;
    justify-content: space-between;
  }
  align-items: center;
  animation-name: ${FadeInAnimation};
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const Copyright = styled.div`
  color: ${gray.four};
`;
const Text = styled.p`
  font-size: ${font.s4};
  padding-inline-start: ${spacing.s4};
`;
const Links = styled.div`
  font-size: ${font.s4};
  margin-block-start: ${spacing.s6};
  @media ${screen.md} {
    margin-block-start: 0;
  }
  a {
    color: ${gray.four};
    text-decoration: none;
    padding: ${spacing.s2};
    @media ${screen.md} {
      padding: ${spacing.s2} ${spacing.s3};
    }
    margin-inline-start: ${spacing.s4};
    margin-inline-end: ${spacing.s4};
    &.active,
    &:hover {
      background: ${gray.five};
      color: ${gray.white};
      border-radius: ${borderRadius.pill};
    }
  }
`;
