import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  yellow,
  gray,
  font,
  spacing,
  transition,
  red,
  purple,
  teal,
} from "../../utils";
import { FiArrowRight } from "react-icons/fi";

const BorderBottomLink = ({ link, title, color }) => {
  return (
    <LinkAnimation to={link} className={color}>
      {title} <FiArrowRight className="right-arrow" />
    </LinkAnimation>
  );
};

export default BorderBottomLink;

const LinkAnimation = styled(Link)`
  outline: none;
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${gray.five};
  font-weight: bold;
  border-bottom: 4px solid ${gray.two};
  font-size: ${font.s4};
  margin-block-start: ${spacing.s6};
  .right-arrow {
    position: relative;
    top: 4px;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 4px;
    transition: width ${transition.reg};
    border-radius: 2px;
  }
  &.yellow::after {
    background: ${yellow.four};
  }
  &.red::after {
    background: ${red.four};
  }
  &.purple::after {
    background: ${purple.four};
  }
  &.teal::after {
    background: ${teal.four};
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
    }
  }
`;
