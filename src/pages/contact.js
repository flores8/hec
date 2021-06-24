import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import ContactForm from "../components/Forms/ContactForm";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";

const Contact = () => {
  return (
    <>
      <Seo title="Contact us" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Contact us"}
            headlinePunctuation={"."}
            headlinePeriod={"blue"}
            subtitle={
              "Send us a message. We’ll get back to you shortly. We look forward to working with you."
            }
            includeLink={"false"}
          />
          <ContactForm button={"Send Message"} />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default Contact;
