import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Button = () => {
  return <ButtonPill></ButtonPill>;
};

export default Button;

const ButtonPill = styled(Link)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: ${transition.reg};
`;
