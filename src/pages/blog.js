import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";
import Hero from "../components/Hero";
import usePosts from "../hooks/usePosts";
import Posts from "../components/Posts";

const Blog = () => {
  const { allposts } = usePosts();
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
        <Posts posts={allposts.posts} />
      </Layout>
    </>
  );
};

export default Blog;
