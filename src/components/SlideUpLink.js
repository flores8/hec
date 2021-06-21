import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { blue, gray } from "../utils";
import { FiArrowRight } from "react-icons/fi";

const SlideUpLink = ({ link, title, arrow }) => {
  return (
    <LinkAnimation to={link}>
      <LinkBackground>
        {title} {arrow === "true" && <FiArrowRight />}
      </LinkBackground>
    </LinkAnimation>
  );
};

export default SlideUpLink;

const LinkAnimation = styled(Link)`
  margin: 0 0.3rem;
  outline: none;
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${gray.five};
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const LinkBackground = styled.span`
  display: block;
  position: relative;
  z-index: 2;
  padding: 0 3px;
  svg {
    position: relative;
    top: 4px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    z-index: -1;
    background: ${blue.four};
    height: 4px;
    border-radius: 2px;
  }
  ${LinkAnimation}:hover & {
    &:after {
      height: 100%;
      background: ${blue.one};
      border-radius: 4px;
    }
  }
`;
