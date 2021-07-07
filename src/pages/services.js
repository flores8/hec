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
            image="civil-rights"
            headline="Civil rights (Title IX, Title VI, ADA/504, etc.)"
            description="We believe that compliance is about more than just following the law. True compliance integrates a commitment to providing students, campus employees, and community partners with a safe environment in which to access and participate in education and educational activities."
          />
          <TwoColumnsImageRight
            image="title-ix"
            headline="Title IX"
            description="We help ensure your education program and activities operate in a nondiscriminatory manner free of discrimination based on sex, including sexual orientation and gender identity. We provide policy development and review, investigate allegations of discrimiantion/harassment or retaliation for seeking redress under Title IX policies."
          />
          <TwoColumnsImageLeft
            image="title-vi"
            headline="Title VI"
            description="Title VI of the Civil Rights Act of 1964 protects people from discrimination based on race, color or national origin in programs or activities that receive Federal financial assistance. We will work with you to draft policies and procedures consistent with Title VI compliance, investigate complaints of discrimination, and draft Title VI action plans. "
          />
          <TwoColumnsImageRight
            image="ada-504"
            headline="ADA/504"
            description="Public colleges, universities, and private institutions of higher education that receive federal funding have a legal obligation to ensure that all environments across the campus are made accessible to all students, including students with disabilities. We can help you become familiar with legal mandates for digital and web-based technologies, responding to complaints of discrimination or failure to accommodate, and developing and reviewing institutional policies and training. "
          />
          <TwoColumnsImageLeft
            image="regulatory-compliance"
            headline="Regulatory Compliance"
            description="Higher education is experiencing a time where regulatory activity is rapidly increasing. HEC Partners works with its clients to build an Institutional Compliance Matrix. We can also assists you in creating and supporting an institutional culture of compliance, which includes effective policy development, training, internal communication strategies, and a quality assurance program. "
          />
          <TwoColumnsImageRight
            image="human-resources"
            headline="Human Resources"
            description="The greatest strength of any organization is its people, and HEC Partners works with its clients to provide support and guidance their human resources staff needs to be in compliance with regulations and laws that impact institutions as a result of employee/employer interactions. We deliver customized Human Resources support including crafting internal policies, investigating complaints of discrimination and harassment, and progressive discipline procedures."
          />
          <TwoColumnsImageLeft
            image="policy-development"
            headline="Policy Development"
            description="HEC Partners works with its clients in drafting durable institutional policies and procedures with effective design and simplified formatting for both easy readability and comprehension."
          />
          <TwoColumnsImageRight
            image="student-aid"
            headline="Federal Student Aid (Title IV)"
            description="Properly administering Federal Student Aid programs is one of the most crucial aspects of maintaining institutional compliance. HEC Partners works with its clients to ensure compliance with federal regulations as they administer Title IV. We are experts in program reviews, single audits, internal audits, risk assessments, and general assessments of federal student aid administration. We have assisted clients in implementing proven methods to clear audit findings and identify potential risks. We can also assist clients who want to know the compliance health of their institutions."
          />
          <TwoColumnsImageLeft
            headline="Enrollment Services"
            description="HEC Partners works with clients to build and provide core services to students in an effort to facilitate access to their education. Our principles include assisting clients in utilizing federal, state, and institutional funding sources to help students make informed decisions around college attendance and affordability. Our goal is simple. We want to be there for our clients so they can help their students persist and complete post secondary education."
          />
          <TwoColumnsImageRight
            headline="Emergency Relief Funding / Administration / Compliance"
            description="The COVID-19 pandemic has affected everyone in tangible ways. During this time, it is important that institutions of higher education are equipped with systems that get Higher Education Emergency Relief funds in the hands of eligible students. HEC Partners works with clients to develop a system to automate the awarding processes to fund students in need, while still meeting compliance and federal reporting requirements."
          />
          <TwoColumnsImageLeft
            headline="Athletic Association and Conference Compliance"
            description="HEC Partners specializes in NCAA (all divisions) and athletic conference compliance. We can help you maximize federal, state, and institutional funding for your equivalency sports, help your head count sports understand exceptions to common myths around student-athlete eligibility for grants and scholarships beyond athletic scholarships. We can also work with your student-athletes to train on Title IX, Title VI, and Social Media and the First Amendment."
          />
          <TwoColumnsImageRight
            headline="Institutional Effectiveness and Data Analysis"
            description="Successful organizations use data to drive decisions but Financial Aid can be confusing and often perceived as inconsistent with enrollment and strategic goals. Some even argue Financial Aid regulations can be a barrier to student enrollment. HEC Partners can help our clients understand how to use financial aid data and analysis to support their institutional mission, goals, recruitment, and retention."
          />
          <TwoColumnsImageLeft
            headline="Internal / External Audit and Program Reviews"
            description="HEC Partners wants to help its clients facing audits and program reviews. We help our clients understand their compliance health before an audit or program review but we also work with clients facing negative audit or review findings in order to address shortcomings and clear findings. We can not make audits and program reviews go away but we can help them no longer be dreaded."
          />
          <TwoColumnsImageRight
            headline="FERPA Unauthorized Disclosure Remediation Plans"
            description="HEC Partners works with its clients to address FERPA unauthorized disclosures of personally identifiable information (PII). Unauthorized disclosures happen on small or large scales. HEC Partners can help develop a FERPA unauthorized disclosure remediation plan to address such topics as notification of the disclosure and remediation so that continued disclosures do not occur. HEC Partners also works with clients on disclosure avoidance and implementing best practices related to safeguarding student data."
          />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default Services;
