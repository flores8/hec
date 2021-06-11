import React from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { useLocation } from "@reach/router";

const SEO = ({ title, description, image, author, contentType }) => {
  const { pathname } = useLocation();
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultAuthor,
    siteUrl,
    defaultImage,
    defaultContentType,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    author: author || defaultAuthor,
    contentType: contentType || defaultContentType,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en-us" dir="ltr" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.contentType} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta
        name="ahrefs-site-verification"
        content="660d1779d0c6babd6cda432132ea5bffbbee37aada155d27b00c40991922d78e"
      ></meta>

      <title>{seo.title}</title>
    </Helmet>
  );
};

export default SEO;
