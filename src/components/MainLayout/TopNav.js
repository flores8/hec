import React from "react";
import styled from "styled-components";
import { width, gray, blue, spacing, borderRadius, screen } from "../../utils";
import { Link } from "gatsby";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const TopNav = () => {
  return (
    <Header>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <Hamburger>
        <Menu></Menu>
      </Hamburger>
      <NavLinks />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  margin: ${spacing.s4} auto;
  max-inline-size: ${width.xxlg};
  position: relative;
`;
const LogoWrapper = styled.div`
  inline-size: 20rem;
  padding-inline-start: ${spacing.s5};
  padding-block-start: ${spacing.s3};
  @media ${screen.xlg} {
    inline-size: 22rem;
  }
`;
const Menu = styled.div`
  width: 36px;
  height: 4px;
  border-radius: ${borderRadius.small};
  background: ${gray.five};
  position: relative;
  transition: 0.3s;
  &:before,
  &:after {
    content: "";
    height: 4px;
    border-radius: ${borderRadius.small};
    position: absolute;
    right: 0;
    background: ${gray.five};
    transition: 0.3s;
  }
  &:before {
    top: -10px;
    width: 30px;
  }
  &:after {
    top: 10px;
    width: 21px;
  }
`;
const Hamburger = styled.div`
  background: ${gray.one};
  height: 75px;
  width: 75px;
  position: absolute;
  right: 24px;
  border-radius: ${borderRadius.circle};
  display: grid;
  align-items: center;
  justify-content: center;
  @media ${screen.lg} {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover ${Menu} {
    background: ${blue.five};
    &:before {
      background: ${blue.five};
      width: 21px;
    }
    &:after {
      background: ${blue.five};
      width: 30px;
    }
  }
`;

export default TopNav;
