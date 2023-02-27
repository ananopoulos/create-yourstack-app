/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import LinkButton from "./LinkButton";

describe("/src/components/atoms/LinkButton", () => {
  test("should render", () => {
    const props = {
      label: "Test",
      href: "here",
    };
    const { queryByText } = render(<LinkButton {...props} />);
    expect(queryByText("Test")).toBeTruthy();
  });

  test("should render <p>", () => {
    const props = {
      label: "Test",
      href: "",
    };
    render(<LinkButton {...props} />);
  });
});
