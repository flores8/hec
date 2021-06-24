import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import { ItalicHeader } from "../components/Headlines";
import TwoColumns from "../components/TwoColumns";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";
import CallToAction from "../components/CallToAction";

const IndexPage = () => {
  return (
    <>
      <Seo title="Helping you with all your compliance needs" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Compliance matters"}
            headlinePunctuation={"."}
            headlinePeriod={"teal"}
            subtitle={
              "We are a higher education consultancy and training partner to maintain compliance and administration across your institution, so you can focus on your students."
            }
            includeLink={"true"}
            link={"/about"}
            linkTitle={"Learn more"}
            arrow={"true"}
          />
          <FeaturedPost />
          <ItalicHeader>
            Let’s talk and help you with your compliance needs.
          </ItalicHeader>
          <TwoColumns
            svg1="compliance"
            svg2="financial"
            headline1="Federal and State Compliance"
            headline2="Financial Aid"
            description1="Keep your institution free from legal battles with smart compliance
          regulations. Avoid any negative policies around discrimination and
          unequal treatment on both the federal as well as the state level.
          Whether you’re in the middle of a legal battle or want to avoid one,
          we can help."
            description2="Need help with long and short term strategic planning? Are you
          utilizing financial aid to support student recruitment and retention?
          Need help finding and distributing Higher Education Emergency Relief
          funds? We can help with everything from compliance to automation to
          administration."
            link1={"/services"}
            linkTitle1={"Learn about our services"}
            linkColor1={"yellow"}
            link2={"/services"}
            linkTitle2={"Learn about our services"}
            linkColor2={"red"}
          />
          <ItalicHeader>
            We are proud to have worked with some amazing institutions.
          </ItalicHeader>
          <TwoColumns
            svg1="team"
            svg2="chat"
            headline1="Meet the team"
            headline2="Let's work together"
            description1="Behind every decision is years of experience and knowledge about compliance and financial aid. Meet the team that can help."
            description2="We’d love to hear more about your compliance needs. Let’s talk and ensure your institution is safe and has great policies set in place!"
            link1={"/about"}
            linkTitle1={"Meet our team"}
            linkColor1={"teal"}
            link2={"/contact"}
            linkTitle2={"Contact us"}
            linkColor2={"purple"}
          />
        </NonFullWidth>
        <CallToAction />
      </Layout>
    </>
  );
};

export default IndexPage;
