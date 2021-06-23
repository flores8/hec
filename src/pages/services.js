import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";

const Services = () => {
  return (
    <>
      <Seo title="Services page" />
      <Layout>
        <Hero
          headline={"Our services"}
          headlinePunctuation={"."}
          headlinePeriod={"red"}
          subtitle={
            "Helping ensure your institution maintains compliance so that you can get back to the business of educating and shaping minds."
          }
          includeLink={"false"}
        />
      </Layout>
    </>
  );
};

export default Services;
