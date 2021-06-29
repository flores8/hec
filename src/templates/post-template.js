import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/MainLayout/Layout";

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
        <article className="animate">
          <GatsbyImage image={getImage(image)} alt={title} />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Layout>
    </>
  );
};

export default postTemplate;

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
