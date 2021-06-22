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
  transition,
} from "../../utils";
import { Link } from "gatsby";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { FiX } from "react-icons/fi";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header className={`${open ? "nav-open" : "nav-closed"}`}>
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
  z-index: 1;
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
  &.nav-open + main {
    transform: scale(0.6);
  }
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
  width: ${spacing.s6};
  height: 4px;
  border-radius: ${borderRadius.small};
  background: ${gray.five};
  position: relative;
  transition: ${transition.reg};
  &:before,
  &:after {
    content: "";
    height: 4px;
    border-radius: ${borderRadius.small};
    position: absolute;
    right: 0;
    background: ${gray.five};
    transition: ${transition.reg};
  }
  &:before {
    top: -10px;
    width: ${spacing.s5};
  }
  &:after {
    top: 10px;
    width: ${spacing.s4};
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
      width: ${spacing.s4};
    }
    &:after {
      background: ${blue.five};
      width: ${spacing.s5};
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
    transition: ${transition.reg};
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
    transform: translateY(-100%);
  }
  border: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${gray.white};
  padding: 0;
  transform: translateY(0);
  transition-property: transform;
  transition-duration: 0.5s;
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
  transition: ${transition.reg};
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
    background: ${blue.one};
  }
  svg {
    font-size: ${font.s6};
    color: ${gray.five};
  }
`;
