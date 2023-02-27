/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import "@testing-library/jest-dom";

describe("/src/components/organisms/PostCard", () => {
  const props = {
    title: "Title",
    description: "Description",
    href: "Href",
    image: "Image",
    date: "January 1, 2023",
  };

  test("should render", () => {
    render(<PostCard {...props} />);
    expect(screen.getByTestId(props.href)).toBeInTheDocument("Title");
    expect(screen.getByTestId(props.href)).toBeInTheDocument("Description");
  });
});
