import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          defaultAuthor: author
          siteUrl: url
          defaultImage: image
          defaultContentType: contentType
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
