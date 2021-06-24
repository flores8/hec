import styled, { css } from "styled-components";
import { font, blue, width, spacing } from "../utils";

const Animate = css`
  animation-name: fade-in-up;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

export const ItalicHeader = styled.h2`
  ${Animate}
  font-size: ${font.s8};
  color: ${blue.five};
  line-height: 1;
  font-style: italic;
  max-width: ${width.xlg};
  margin: auto;
  margin-block-start: ${spacing.s10};
`;

export const PageHeadline = styled.h2`
  ${Animate}
  font-size: ${font.s8};
  color: ${blue.five};
  line-height: 1;
  font-style: italic;
  max-width: ${width.xlg};
`;
