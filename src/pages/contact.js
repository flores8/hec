import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";

const Contact = () => {
  return (
    <>
      <Seo title="Contact us" />
      <Layout>
        <Hero
          headline={"Contact us"}
          headlinePeriod={"teal"}
          subtitle={
            "Send us a message. We’ll get back to you shortly. We look forward to working with you."
          }
          includeLink={"false"}
        />
      </Layout>
    </>
  );
};

export default Contact;
