import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Post = ({ frontmatter }) => {
  const { title, slug, author } = frontmatter;
  return (
    <PostWrapper>
      <PostName>
        Title: <Link to={`/blog/${slug}`}>{title}</Link> by {author}
      </PostName>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.section``;

const PostName = styled.div``;
