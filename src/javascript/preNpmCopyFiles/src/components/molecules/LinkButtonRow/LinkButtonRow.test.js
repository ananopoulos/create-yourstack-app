/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LinkButtonRow from "./LinkButtonRow";

describe("/src/components/atoms/LinkButton", () => {
  const props1 = {
    label: "Test1",
    href: "here",
  };
  const props2 = {
    label: "Test2",
    href: "there",
  };
  test("should render", () => {
    const { queryByText } = render(
      <LinkButtonRow>
        <LinkButton {...props1} />
        <LinkButton {...props2} />
      </LinkButtonRow>
    );

    expect(queryByText("Test1")).toBeTruthy();
    expect(queryByText("Test2")).toBeTruthy();
  });
});
