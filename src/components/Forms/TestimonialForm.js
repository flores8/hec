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

const TestimonialForm = ({ button }) => {
  return (
    <FormWrapper className="animate">
      <form
        className="flow"
        name="testimonial-form"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success-testimonial"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="testimonial-form" />
        <label className="name">
          Full Name
          <input type="text" name="name" required />
        </label>
        <label className="email">
          Email
          <input type="email" name="email" required />
        </label>
        <label className="testimonial">
          If a friend was considering hiring HEC Partners, what would you tell
          them? How was your experience working with us?
          <textarea type="text" name="testimonial" required />
        </label>
        <label className="additional-thoughts">
          Anything else you’d like to share?
          <textarea type="text" name="additional-thoughts" />
        </label>
        <label className="terms">
          <input type="checkbox" name="terms" value="agree-to-terms" required />{" "}
          I acknowledge and accept that what I wrote may be posted on HEC
          Partner’s website and/or marketing materials.
        </label>
        <button type="submit">{button}</button>
      </form>
    </FormWrapper>
  );
};

export default TestimonialForm;

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
      "testimonial"
      "additional-thoughts"
      "terms"
      "button";
    @media ${screen.md} {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "name email"
        "testimonial testimonial"
        "additional-thoughts additional-thoughts"
        "terms terms"
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
  .share {
    grid-area: share;
  }
  .terms {
    grid-area: terms;
  }
  input {
    grid-area: col2;
    ${DefaultInput}
    ${InputStyles}
  }
  .terms {
    input {
      display: inline;
      inline-size: auto;
      block-size: auto;
    }
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
