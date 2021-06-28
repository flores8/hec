import React from "react";
import styled from "styled-components";

const Post = ({ frontmatter }) => {
  const { title, subtitle, slug, author } = frontmatter;
  return (
    <PostWrapper>
      <PostName>
        Title: {title} by {author}
      </PostName>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.section``;

const PostName = styled.div``;
