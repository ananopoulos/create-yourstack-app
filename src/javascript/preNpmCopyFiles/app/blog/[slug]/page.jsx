import React from "react";
import PropTypes from "prop-types";
import getMarkdowns from "../../../src/utils/getMarkdowns/getMarkdowns";
import getMarkdown from "../../../src/utils/getMarkdown/getMarkdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import ArticleStructuredData from "../../../src/components/organisms/ArticleStructuredData/ArticleStructuredData";
import readingTime from "reading-time";
import LinkButton from "../../../src/components/atoms/LinkButton/LinkButton";
import LinkButtonRow from "../../../src/components/molecules/LinkButtonRow/LinkButtonRow";
import Script from "next/script";
import { constants } from "../../../src/utils/constants.js";

export async function generateMetadata({ params }) {
  const contentPath = "src/content/blog";
  const post = getMarkdown(params.slug, contentPath);

  return {
    title: post.data.title,
    description: post.data.description,
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.description,
      site: constants.baseUrl,
      images: [constants.baseUrl + "/blog/" + params.slug],
    },
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      url: constants.baseUrl + "/blog/" + params.slug,
      images: [
        {
          url: constants.baseUrl + post.data.image,
        },
      ],
      locale: "en-US",
      type: "article",
    },
  };
}

export default async function Page({ params }) {
  const contentPath = "src/content/blog";
  const post = getMarkdown(params.slug, contentPath);
  const articleStructuredDataProps = {
    title: post.data.title,
    author: post.data.author,
    authorUrl: post.data.authorUrl,
    description: post.data.description,
    date: post.data.date,
    imageUrl: post.data.image,
  };
  const readingTimeStat = readingTime(post.content);

  return (
    <div className="prose container mx-auto p-6 mt-8">
      <h1 className="mb-0">{post.data.title}</h1>
      <p>
        {post.data.date} &#x2022; {readingTimeStat.text}
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {post.content}
      </ReactMarkdown>
      <LinkButtonRow>
        <LinkButton
          label="Next"
          href={post.data.next ? "/blog/" + post.data.next : ""}
        />
        <LinkButton
          label="Prev"
          href={post.data.prev ? "/blog/" + post.data.prev : ""}
        />
      </LinkButtonRow>
      <ArticleStructuredData {...articleStructuredDataProps} />
      <Script
        type="module"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10.0.x/dist/mermaid.esm.min.mjs";
          mermaid.initialize({startOnLoad: true});
          mermaid.contentLoaded();
`,
        }}
      />
    </div>
  );
}

export function generateStaticParams() {
  const contentPath = "src/content/blog";
  const posts = getMarkdowns(contentPath);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

Page.propTypes = {
  params: PropTypes.func.isRequired,
};
