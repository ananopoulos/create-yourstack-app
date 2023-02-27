/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import ArticleStructuredData from "./ArticleStructuredData";

describe("/src/components/organisms/ArticleStructuredData", () => {
  const props = {
    title: "Title",
    description: "Description",
    author: "Author",
    authorUrl: "AuthorUrl",
    imageUrl: "Image",
    date: "January 1, 2023",
  };

  test("should render", () => {
    render(<ArticleStructuredData {...props} />);
  });
});
