import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import { ItalicHeader } from "../components/Headlines";

const IndexPage = () => {
  return (
    <>
      <Seo title="Helping you with all your compliance needs" />
      <Layout>
        <Hero
          headline={"Compliance matters"}
          headlinePeriod={"blue"}
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
      </Layout>
    </>
  );
};

export default IndexPage;
