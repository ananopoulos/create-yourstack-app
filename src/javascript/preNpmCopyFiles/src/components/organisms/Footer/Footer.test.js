/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("/src/components/organisms/Footer", () => {
  const year = new Date().getFullYear();
  test("should render", () => {
    render(<Footer company="Company" />);
    expect(screen.getByTestId("footer")).toBeInTheDocument(
      "All rights reserved."
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument(year);
  });
});
