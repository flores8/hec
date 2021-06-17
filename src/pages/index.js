import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <>
      <Seo title="Helping you with all your compliance needs" />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;
