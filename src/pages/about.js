import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";

const About = () => {
  return (
    <>
      <Seo title="About page" />
      <Layout>
        <div>
          <h1>About</h1>
          <p>about us page</p>
        </div>
      </Layout>
    </>
  );
};

export default About;
