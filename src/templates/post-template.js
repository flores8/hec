import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/MainLayout/Layout";
import styled from "styled-components";
import {
  font,
  spacing,
  borderRadius,
  width,
  gray,
  transition,
  red,
  teal,
} from "../utils";

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
    margin: ${spacing.s8} ${spacing.s4} 0;
    max-height: ${spacing.s15};
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
  text-align: left;
  max-width: ${width.lg};
  margin: auto;
  margin-block-start: ${spacing.s8};
  padding-inline-start: ${spacing.s4};
  padding-inline-end: ${spacing.s4};
  h2 {
    font-size: ${font.s7};
    line-height: 1.1;
    margin-top: ${spacing.s9};
  }
  h3 {
    font-size: ${font.s6};
    line-height: 1.2;
    margin-top: ${spacing.s8};
  }
  p {
    font-size: ${font.s5};
    a {
      outline: none;
      position: relative;
      display: inline-block;
      text-decoration: none;
      color: ${gray.five};
      border-block-end: 4px solid ${gray.two};
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 4px;
        background: ${red.three};
        transition: width ${transition.reg};
        border-radius: 2px;
      }
      &:hover {
        cursor: pointer;
        &:after {
          width: 100%;
        }
      }
    }
  }
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
