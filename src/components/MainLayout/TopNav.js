import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  font,
  width,
  gray,
  blue,
  spacing,
  borderRadius,
  screen,
} from "../../utils";
import { Link } from "gatsby";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { FiX } from "react-icons/fi";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <Hamburger onClick={() => setOpen(!open)}>
        <Menu></Menu>
      </Hamburger>
      <LinkStyles>
        <NavLinks />
      </LinkStyles>
      <MobileNav
        onClick={() => setOpen(!open)}
        className={`${open ? "show" : "hide"}`}
      >
        <Close>
          <FiX />
        </Close>
        <NavLinks />
      </MobileNav>
    </Header>
  );
};

export default TopNav;

const FadeInAnimation = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const Header = styled.header`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  padding-block-start: ${spacing.s4};
  padding-block-end: ${spacing.s4};
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${width.xxlg};
  position: relative;
  animation-name: ${FadeInAnimation};
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;
const LogoWrapper = styled.div`
  inline-size: 16rem;
  padding-inline-start: ${spacing.s5};
  padding-block-start: ${spacing.s3};
  @media ${screen.md} {
    inline-size: 20rem;
  }
  @media ${screen.xlg} {
    inline-size: 22rem;
  }
`;
const Menu = styled.div`
  width: 31px;
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
    width: 25px;
  }
  &:after {
    top: 10px;
    width: 16px;
  }
`;
const Hamburger = styled.button`
  border: none;
  background: ${gray.one};
  height: ${spacing.s8};
  width: ${spacing.s8};
  position: absolute;
  right: ${spacing.s5};
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
      width: 16px;
    }
    &:after {
      background: ${blue.five};
      width: 25px;
    }
  }
`;

const LinkStyles = styled.nav`
  display: none;
  @media ${screen.lg} {
    display: block;
  }
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

const MobileNav = styled.button`
  &.hide {
    display: none;
  }
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100vh;
  background: ${gray.white};
  padding: 0;
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: ${gray.five};
    padding-block-start: ${spacing.s5};
    padding-block-end: ${spacing.s5};
    &:hover {
      background: ${blue.one};
    }
    &.active {
      background: ${blue.one};
    }
  }
`;

const Close = styled.div`
  position: absolute;
  top: ${spacing.s4};
  right: ${spacing.s6};
  background: ${gray.one};
  border-radius: ${borderRadius.circle};
  width: ${spacing.s8};
  height: ${spacing.s8};
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
    background: ${blue.one};
  }
  svg {
    font-size: ${font.s7};
  }
`;
