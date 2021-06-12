import React from "react";
import styled from "styled-components";
import { width, font, gray, blue, spacing } from "../../utils";
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
        <Link to="/contact/" activeClassName="active">
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
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${width.xxlg};
`;
const LogoWrapper = styled.div`
  inline-size: 20rem;
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
  }
`;

export default TopNav;
