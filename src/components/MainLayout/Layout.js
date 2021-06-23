import React from "react";
import TopNav from "./TopNav";
import styled from "styled-components";
import { GlobalStyle, gray, transition } from "../../utils";

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
  transition-duration: ${transition.slow};
  transition-property: transform;
`;

export default Layout;
