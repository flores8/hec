import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";

const SuccessTestimonial = () => {
  return (
    <>
      <Seo title="Success" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Success"}
            headlinePunctuation={"!"}
            headlinePeriod={"teal"}
            subtitle={
              "Thank you so much for sharing your experience and thoughts on our services. We truly appreciate the time you took to share a testimonial. We are grateful for you!"
            }
            includeLink={"true"}
            link={"/"}
            linkTitle={"Back to home"}
            arrow={"true"}
          />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default SuccessTestimonial;
