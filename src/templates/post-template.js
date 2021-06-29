import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/MainLayout/Layout";
import styled from "styled-components";
import { font, spacing, borderRadius, width } from "../utils";

const postTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, subtitle, author, image },
      body,
    },
  } = data;
  return (
    <>
      <Seo title={title} subtitle={subtitle} author={author} />
      <Layout>
        <PostWrapper>
          <Headline className="animate--immediate">{title}</Headline>
          <Subtitle className="animate--slow">{subtitle}</Subtitle>
          <GatsbyImage
            image={getImage(image.childrenImageSharp[0])}
            alt={title}
            className="animate"
          />
          <Post className="animate flow">
            <MDXRenderer>{body}</MDXRenderer>
          </Post>
        </PostWrapper>
      </Layout>
    </>
  );
};

export default postTemplate;

const PostWrapper = styled.article`
  margin-top: ${spacing.s8};
  text-align: center;
  .gatsby-image-wrapper {
    border-radius: ${borderRadius.large};
    max-width: ${width.xlg};
    margin: auto;
    margin-block-start: ${spacing.s8};
    max-height: ${spacing.s16};
  }
`;
const Headline = styled.h1`
  font-size: ${font.s7};
  line-height: 1.1;
  max-width: ${width.md};
  margin: auto;
`;
const Subtitle = styled.p`
  font-size: ${font.s20};
  padding-block-start: ${spacing.s4};
  max-width: ${width.sm};
  margin: auto;
`;
const Post = styled.article`
  margin-top: ${spacing.s8};
  text-align: left;
`;

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
        author
        slug
        image {
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
