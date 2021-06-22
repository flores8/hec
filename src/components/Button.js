import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { borderRadius, transition, font, gray, spacing } from "../utils";

const Button = () => {
  return <ButtonPill>Learn more</ButtonPill>;
};

export default Button;

const ButtonPill = styled(Link)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: ${transition.reg};
  border-radius: ${borderRadius.pill};
  font-size: ${font.s20};
  background: ${gray.five};
  color: ${gray.white};
  padding-block-start: ${spacing.s2};
  padding-block-end: ${spacing.s2};
  padding-inline-start: ${spacing.s6};
  padding-inline-end: ${spacing.s6};
  &:hover,
  &:focus,
  &:active {
    background: ${gray.six};
  }
`;
