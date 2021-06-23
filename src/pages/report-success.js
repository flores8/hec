import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";

const ReportSuccess = () => {
  return (
    <>
      <Seo title="Success" />
      <Layout>
        <Hero
          headline={"Success"}
          headlinePunctuation={"!"}
          headlinePeriod={"teal"}
          subtitle={
            "We have successfully received your request and we will send you the information you requested very soon."
          }
          includeLink={"true"}
          link={"/"}
          linkTitle={"Go back to the home page"}
          arrow={"true"}
        />
      </Layout>
    </>
  );
};

export default ReportSuccess;
