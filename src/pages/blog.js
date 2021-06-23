import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";

const Blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <Hero
          headline={"Blog"}
          headlinePunctuation={"."}
          headlinePeriod={"red"}
          subtitle={"Covering all things compliance and financial aid related."}
          includeLink={"false"}
        />
      </Layout>
    </>
  );
};

export default Blog;
