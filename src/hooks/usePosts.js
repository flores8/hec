import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMdx(
        limit: 1
        filter: { frontmatter: { featured: { eq: true } } }
      ) {
        nodes {
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
          id
        }
      }
    }
  `);
  return data;
};

export default usePosts;
