import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { font, spacing, gray } from "../../utils";
import SlideUpLink from "../../components/Links/SlideUpLink";

const Post = ({ frontmatter }) => {
  const { title, subtitle, slug, date } = frontmatter;
  return (
    <PostsWrapper>
      <Title>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>
        <SlideUpLink
          link={`/blog/${slug}`}
          title={"Read article"}
          arrow={"true"}
          color={"yellow"}
        />
        <Date>{date}</Date>
      </Footer>
    </PostsWrapper>
  );
};

export default Post;

const PostsWrapper = styled.section``;

const Title = styled.h3`
  font-size: ${font.s6};
  line-height: 1.2;
  font-weight: bold;
  a {
    color: ${gray.five};
    text-decoration: none;
  }
`;

const Subtitle = styled.p`
  font-size: ${font.s20};
  margin-top: ${spacing.s5};
  color: ${gray.five};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing.s5};
`;

const Date = styled.span`
  font-size: ${font.s4};
  color: ${gray.four};
  letter-spacing: 1px;
  text-transform: uppercase;
`;
