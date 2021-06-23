import { createGlobalStyle } from "styled-components";
import { spacing, font } from "./size";
import { gray, blue } from "./colors";
import { transition } from "./motion";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
/* ################## */
/* START Reset Styles */
/* ################## */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core root defaults */
html {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-inline-size: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01s !important;
    scroll-behavior: auto !important;
  }
}
/* ################## */
/* END Reset Styles */
/* ################## */

/* ################## */
/* START Global Styles */
/* ################## */

:root {
  --flow-space: ${spacing.s6};
}
.flow > * + * {
  margin-top: var(--flow-space, ${spacing.s6});
}

::selection {
  color: ${gray.six};
  background: ${blue.three};
}

body {
  background: ${gray.white};
  color: ${gray.five};
  line-height: 1.6;
  font-family: ${primaryFont};
  font-size: ${font.s5};
}
a {
  transition: ${transition.reg};
}


/* Animations */
.animate {
  animation-name: fade-in-up;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translate3d(0,50px,0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* ################## */
/* END Global Styles */
/* ################## */

`;
