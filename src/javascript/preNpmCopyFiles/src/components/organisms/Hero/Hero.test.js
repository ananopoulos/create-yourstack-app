/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("/src/components/organisms/Hero", () => {
  test("should render", () => {
    const { queryByText } = render(<Hero />);
    expect(queryByText("Welcome to Your App!")).toBeTruthy();
  });
});
