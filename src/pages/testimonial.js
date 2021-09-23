import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import TestimonialForm from "../components/Forms/TestimonialForm";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";

const Testimonial = () => {
  return (
    <>
      <Seo title="Share your experience" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Share your experience"}
            headlinePunctuation={"."}
            headlinePeriod={"teal"}
            subtitle={
              "We are gathering feedback and testimonials to share on our website and our marketing materials. If you feel comfortable, we’d love to hear about your experience."
            }
            includeLink={"false"}
          />
          <TestimonialForm button={"Share Thoughts"} />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default Testimonial;
