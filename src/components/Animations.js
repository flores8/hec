import styled, { keyframes } from "styled-components";

const FadeInKeyframe = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const FadeInUpKeyframe = keyframes`
0% {
  opacity: 0;
  transform: translate3d(0,50px,0);
}
100% {
  opacity: 1;
  transform: none;
}
`;
