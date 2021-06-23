import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { spacing, width, font, gray, borderRadius } from "../../utils";

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

const FooterWrapper = styled.footer`
  padding-block-start: ${spacing.s8};
  padding-block-end: ${spacing.s8};
`;

const Content = styled.div`
  max-width: ${width.xlg};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.div`
  color: ${gray.four};
`;
const Text = styled.p`
  font-size: ${font.s20};
`;
const Links = styled.div`
  font-size: ${font.s4};
  a {
    color: ${gray.four};
    text-decoration: none;
    padding: ${spacing.s2} ${spacing.s3};
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
