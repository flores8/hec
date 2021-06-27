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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg/`,
        },
      },
    },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        display: "swap",
        variable: true,
        fonts: [
          {
            family: "Work Sans",
            weights: ["400", "500", "700", ["700"]],
          },
        ],
      },
    },
  ],
};
