import React from "react";
import styled, { css } from "styled-components";
import {
  gray,
  yellow,
  blue,
  spacing,
  transition,
  screen,
  borderRadius,
  font,
} from "../../utils";

const ContactForm = ({ button }) => {
  return (
    <FormWrapper className="animate">
      <form
        className="flow"
        name="contact-form"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <label className="name">
          Full Name
          <input type="text" name="name" required />
        </label>
        <label className="email">
          Email
          <input type="email" name="email" required />
        </label>
        <label className="message">
          Primary Interest / Comments
          <textarea type="text" name="message" />
        </label>
        <button type="submit">{button}</button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;

export const DefaultInput = css`
  border-radius: ${borderRadius.md};
  display: block;
  inline-size: 100%;
  block-size: ${spacing.s7};
  padding-inline-start: ${spacing.s4};
  transition: ${transition.reg};
`;

export const InputStyles = css`
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
`;

const FormWrapper = styled.div`
  margin: auto;
  padding-block-start: ${spacing.s5};
  @media ${screen.md} {
    padding: ${spacing.s5} ${spacing.s9};
  }
  --flow-space: ${spacing.s4};
  form {
    display: grid;
    grid-gap: ${spacing.s4};
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "email"
      "message"
      "button";
    @media ${screen.md} {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "name email"
        "message message"
        "button button";
    }
  }
  label {
    font-size: ${font.s4};
  }
  .name {
    grid-area: name;
  }
  .email {
    grid-area: email;
  }
  .message {
    grid-area: message;
  }
  input {
    grid-area: col2;
    ${DefaultInput}
    ${InputStyles}
  }
  textarea {
    ${DefaultInput}
    ${InputStyles}
    height: ${spacing.s10};
    padding-block-start: ${spacing.s2};
  }
  button {
    grid-area: button;
    ${DefaultInput}
    display: inline-block;
    @media ${screen.md} {
      inline-size: 50%;
    }
    border: none;
    background: ${yellow.two};
    color: ${gray.five};
    font-weight: bold;
    font-size: ${font.s4};
    cursor: pointer;
    white-space: nowrap;
    &:hover,
    &:active,
    &:focus {
      background: ${yellow.three};
      color: ${gray.six};
    }
  }
`;
