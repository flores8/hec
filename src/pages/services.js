import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";
import TwoColumnsImageRight from "../components/TwoColumnsImageRight";
import TwoColumnsImageLeft from "../components/TwoColumnsImageLeft";

const Services = () => {
  return (
    <>
      <Seo title="Services page" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Our services"}
            headlinePunctuation={"."}
            headlinePeriod={"red"}
            subtitle={
              "Helping ensure your institution maintains compliance so that you can get back to the business of educating and shaping minds."
            }
            includeLink={"false"}
          />
          <TwoColumnsImageLeft
            headline="Civil rights (Title IX, Title VI, ADA/504, etc.)"
            description="We believe that compliance is about more than just following the law. True compliance integrates a commitment to providing students, campus employees, and community partners with a safe environment in which to access and participate in education and educational activities."
          />
          <TwoColumnsImageRight
            headline="Title IX"
            description="We help ensure your education program and activities operate in a nondiscriminatory manner free of discrimination based on sex, including sexual orientation and gender identity. We provide policy development and review, investigate allegations of discrimiantion/harassment or retaliation for seeking redress under Title IX policies."
          />
          <TwoColumnsImageLeft
            headline="Title VI"
            description="Title VI of the Civil Rights Act of 1964 protects people from discrimination based on race, color or national origin in programs or activities that receive Federal financial assistance. We will work with you to draft policies and procedures consistent with Title VI compliance, investigate complaints of discrimination, and draft Title VI action plans. "
          />
          <TwoColumnsImageRight
            headline="ADA/504"
            description="Public colleges, universities, and private institutions of higher education that receive federal funding have a legal obligation to ensure that all environments across the campus are made accessible to all students, including students with disabilities. We can help you become familiar with legal mandates for digital and web-based technologies, responding to complaints of discrimination or failure to accommodate, and developing and reviewing institutional policies and training. "
          />
          <TwoColumnsImageLeft
            headline="Regulatory compliance"
            description="Higher education is experiencing a time where regulatory activity is rapidly increasing. HEC Partners works with its clients to build an institutional Compliance Matrix. We can also assists you in creating and supporting an institutional culture of compliance, which includes effective policy development, training, internal communication strategies, and a quality assurance program. "
          />
          <TwoColumnsImageRight
            headline="Human Resources"
            description="The greatest strength of any organization is its people, and HEC Partners works with its clients to provide support and guidance their human resources staff needs to be in compliance with regulations and laws that impact institutions as a result of employee/employer interactions. We deliver customized Human Resources support including crafting internal policies, investigating complaints of discrimination and harassment, and progressive discipline procedures."
          />
          <TwoColumnsImageLeft
            headline="Policy Development"
            description="HEC Partners works with its clients in drafting durable institutional policies and procedures with effective design and simplified formatting for both easy readability and comprehension."
          />
          <TwoColumnsImageRight
            headline="Federal Student Aid (Title IV)"
            description="Get help with your Title IV Federal Student Aid program administration, compliance, operations, and automation. We can help with program reviews, single audits, internal audits, risk assessments, and general assessments of federal student aid administration and implementing proven methods to clear audit findings or potential risks of compliance issues. Or we can simply give you an idea of the health of your institution."
          />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default Services;
