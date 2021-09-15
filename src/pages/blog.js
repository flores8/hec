import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import usePosts from "../hooks/usePosts";
import Posts from "../components/Posts";
import { NonFullWidth } from "../components/MainLayout/ComponentWrapper";

const Blog = () => {
  const { allposts } = usePosts();
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <NonFullWidth>
          <Hero
            headline={"Blog"}
            headlinePunctuation={"."}
            headlinePeriod={"red"}
            subtitle={
              "Covering all things related to compliance and financial aid."
            }
            includeLink={"false"}
          />
          <Posts posts={allposts.posts} />
        </NonFullWidth>
      </Layout>
    </>
  );
};

export default Blog;
