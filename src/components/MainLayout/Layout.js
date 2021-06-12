import React from "react";
import TopNav from "./TopNav";
import styled from "styled-components";
import { gray, primaryFont } from "../../utils";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <TopNav />
        <BodyWrapper>{children}</BodyWrapper>
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
