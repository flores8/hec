import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMdx(
        limit: 1
        filter: { frontmatter: { featured: { eq: true } } }
      ) {
        posts: nodes {
          id
          frontmatter {
            title
            subtitle
            author
            slug
            featured
            date(formatString: "MMMM Do, YYYY")
            image {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      allposts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        posts: nodes {
          id
          frontmatter {
            title
            author
            slug
            featured
            date(formatString: "MMMM Do, YYYY")
            image {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

export default usePosts;
