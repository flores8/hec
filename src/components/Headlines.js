import styled from "styled-components";
import { font, blue, width, spacing } from "../utils";

export const ItalicHeader = styled.h2`
  font-size: ${font.s8};
  color: ${blue.five};
  line-height: 1;
  font-style: italic;
  max-width: ${width.xlg};
  margin: auto;
  margin-block-start: ${spacing.s10};
`;
