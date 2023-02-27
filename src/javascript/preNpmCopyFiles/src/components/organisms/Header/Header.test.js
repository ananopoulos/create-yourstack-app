/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("/src/components/organisms/Header", () => {
  test("should render", () => {
    const { queryByText } = render(<Header />);
    expect(queryByText("Home")).toBeTruthy();
  });
});
