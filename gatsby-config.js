module.exports = {
  siteMetadata: {
    title: "Higher Education Compliance Partners",
    titleTemplate: "%s | HEC Partners",
    description:
      "We are a higher education consultancy and training partner to maintain compliance and/or administration across your institution, so you can focus on your students.",
    url: `https://www.hecpartners.com`,
    author: "HEC Partners",
    image: "/hec-partners.png",
    contentType: "website",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VNTK84ECFZ",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`work sans \:400,500,700,700i`],
        display: "swap",
      },
    },
  ],
};
