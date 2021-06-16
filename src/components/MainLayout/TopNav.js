import React from "react";
import styled from "styled-components";
import { width, font, gray, blue, spacing, borderRadius } from "../../utils";
import { Link } from "gatsby";
import Logo from "./Logo";

const TopNav = () => {
  return (
    <Header>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <NavLinks>
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
        <Link to="/services/" activeClassName="active">
          Services
        </Link>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
        <Link to="/contact/" activeClassName="active" className="contact">
          Contact
        </Link>
      </NavLinks>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  margin: ${spacing.s6} auto;
  max-inline-size: ${width.xxlg};
`;
const LogoWrapper = styled.div`
  inline-size: 20rem;
  padding-inline-start: ${spacing.s5};
`;
const NavLinks = styled.nav`
  width: 61.25rem;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  a {
    font-size: ${font.s20};
    border-block-end: 2px solid ${gray.two};
    line-height: 1.25;
    text-decoration: none;
    color: ${gray.four};
    display: inline-block;
    margin-inline-start: ${spacing.s5};
    margin-inline-end: ${spacing.s5};
    transition: 0.3s;
    &:hover {
      border-block-end: 2px solid ${blue.two};
      color: ${gray.five};
    }
    &.active,
    &.active:hover {
      border-block-end: 2px solid ${blue.four};
      color: ${gray.six};
    }
    &.contact {
      border: 2px solid ${gray.five};
      border-block-end: 2px solid ${gray.five};
      padding: ${spacing.s3} ${spacing.s5};
      border-radius: ${borderRadius.pill};
      margin-inline-start: ${spacing.s4};
      &:hover,
      &.active,
      &.active:hover {
        background: ${blue.four};
        border: 2px solid ${blue.four};
        color: ${gray.white};
      }
    }
  }
`;

export default TopNav;
