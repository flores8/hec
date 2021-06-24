import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";

const Success = () => {
  return (
    <>
      <Seo title="Success" />
      <Layout>
        <Hero
          headline={"Success"}
          headlinePunctuation={"!"}
          headlinePeriod={"teal"}
          subtitle={
            "Thanks for reaching out to us. We will get back to you soon."
          }
          includeLink={"true"}
          link={"/"}
          linkTitle={"Back to home"}
          arrow={"true"}
        />
      </Layout>
    </>
  );
};

export default Success;
