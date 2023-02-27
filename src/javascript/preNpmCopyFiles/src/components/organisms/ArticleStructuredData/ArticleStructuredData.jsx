import React from "react";
import PropTypes from "prop-types";
import Script from "next/script";
import { constants } from "../../../utils/constants.js";

export default function ArticleStructuredData(props) {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    description: props.description,
    image: constants.baseUrl + props.imageUrl,
    datePublished: new Date(props.date).toISOString(),
    author: {
      "@type": "Person",
      name: props.author,
      url: props.authorUrl,
    },
  };
  return (
    <Script
      id="structured-data"
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleStructuredData),
      }}
    />
  );
}

ArticleStructuredData.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
