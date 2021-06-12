import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";

// styles

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
      <Layout>
        <h1 style={headingStyles}>HEC Home page</h1>
        <p style={paragraphStyles}>
          More to come soon...{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;
