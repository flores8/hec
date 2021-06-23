import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <Seo title="About us" />
      <Layout>
        <Hero
          headline={"About us"}
          headlinePunctuation={"."}
          headlinePeriod={"yellow"}
          subtitle={
            "At Higher Education Compliance Partners, we are dedicated to advance the compliance and administrative proficiency across higher educational institutions."
          }
          includeLink={"false"}
        />
      </Layout>
    </>
  );
};

export default About;
