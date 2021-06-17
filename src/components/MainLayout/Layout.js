import React from "react";
import TopNav from "./TopNav";
import styled from "styled-components";
import { GlobalStyle, gray, width, spacing } from "../../utils";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <TopNav />
        <BodyWrapper>{children}</BodyWrapper>
        <GlobalStyle />
      </div>
    </>
  );
};

const BodyWrapper = styled.main`
  color: ${gray.six};
  background: ${gray.white};
  margin: auto;
  max-width: ${width.xxlg};
  padding-inline-start: ${spacing.s5};
  padding-inline-end: ${spacing.s5};
`;

export default Layout;
