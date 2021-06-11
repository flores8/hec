import * as React from "react";
import { gray, primaryFont } from "../utils";
import Seo from "../components/seo";

// styles
const pageStyles = {
  color: `${gray.six}`,
  background: `${gray.one}`,
  padding: 96,
  fontFamily: `${primaryFont}`,
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};

// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Helping you with all your compliance needs" />
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>HEC Home page</h1>
        <p style={paragraphStyles}>
          More to come soon...{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </main>
    </>
  );
};

export default IndexPage;
