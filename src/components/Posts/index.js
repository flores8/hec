import React from "react";
import styled from "styled-components";
import Post from "./Post";
import { spacing, screen } from "../../utils";

const Posts = ({ posts }) => {
  return (
    <BlogPostWrapper className="animate">
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </BlogPostWrapper>
  );
};

export default Posts;

const BlogPostWrapper = styled.section`
  display: grid;
  @media ${screen.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.s7};
    padding: ${spacing.s8};
  }
`;
