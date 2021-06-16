import React from "react";
import Seo from "../components/seo";
import Layout from "../components/MainLayout/Layout";

const Blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <div>
          <h1>Blog</h1>
          <p>blog page</p>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
