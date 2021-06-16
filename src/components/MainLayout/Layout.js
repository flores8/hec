import React from "react";
import TopNav from "./TopNav";
import styled from "styled-components";
import { GlobalStyle, gray, primaryFont } from "../../utils";

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
  background: ${gray.one};
  padding: 96px;
  font-family: ${primaryFont};
`;

export default Layout;
