import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost/Post";
import { ItalicHeader } from "../components/Headlines";
import TwoColumns from "../components/TwoColumns";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";
import CallToAction from "../components/CallToAction";
import usePosts from "../hooks/usePosts";

const IndexPage = () => {
  const { featured } = usePosts();
  return (
    <>
      <Seo title="Helping you with all your compliance needs" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Compliance matters"}
            headlinePunctuation={"."}
            headlinePeriod={"teal"}
            includeSubtitle={"true"}
            subtitle={
              "We are a consultancy and training partner working with higher education institutions to develop processes and programs to ensure compliance, so you can focus on your students."
            }
            includeLink={"true"}
            link={"/about"}
            linkTitle={"Learn more"}
            arrow={"true"}
          />
          <FeaturedPost post={featured} />
          <ItalicHeader>
            Let’s talk and help you with your compliance needs.
          </ItalicHeader>
          <TwoColumns
            svg1="compliance"
            svg2="financial"
            headline1="Federal and State Regulatory Compliance"
            headline2="Financial Aid"
            description1="Reduce the risk of costly legal battles by initiating a proactive regulatory compliance program. Whether you're in the middle of a legal battle or want to avoid one, we can help."
            description2="Are you
          utilizing financial aid to support student access, persistence, and completion?
          Need help finding and distributing Higher Education Emergency Relief
          funds? We can help."
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
