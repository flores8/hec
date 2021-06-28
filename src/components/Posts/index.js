import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <BlogPostWrapper>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </BlogPostWrapper>
  );
};

export default Posts;

const BlogPostWrapper = styled.section``;
