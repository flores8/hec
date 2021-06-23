import React from "react";
import styled, { css } from "styled-components";
import {
  gray,
  yellow,
  blue,
  spacing,
  transition,
  width,
  borderRadius,
  font,
} from "../../utils";

const HomeLeadGen = ({ button }) => {
  return (
    <FormWrapper>
      <form
        className="flow"
        name="home-lead-gen"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/report-success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="home-lead-gen" />
        <input
          type="text"
          name="name"
          placeholder="Enter your first name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">{button}</button>
      </form>
    </FormWrapper>
  );
};

export default HomeLeadGen;

export const DefaultInput = css`
  border-radius: ${borderRadius.md};
  display: block;
  inline-size: 100%;
  block-size: ${spacing.s7};
  padding-inline-start: ${spacing.s4};
  transition: ${transition.reg};
`;

const FormWrapper = styled.div`
  margin: auto;
  padding: ${spacing.s5} ${spacing.s10};
  max-width: ${width.sm};
  --flow-space: ${spacing.s4};
  input {
    ${DefaultInput}
    outline: none;
    border: 2px solid ${gray.two};
    color: ${gray.five};
    font-size: ${font.s4};
    &::placeholder {
      color: ${gray.four};
      font-size: ${font.s4};
      position: relative;
    }
    &:hover,
    &:focus,
    &:active {
      border: 2px solid ${blue.four};
    }
  }
  button {
    ${DefaultInput}
    border: none;
    background: ${yellow.two};
    color: ${gray.five};
    font-weight: bold;
    font-size: ${font.s4};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      background: ${yellow.three};
      color: ${gray.six};
    }
  }
`;
