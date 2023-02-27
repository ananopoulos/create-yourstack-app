import React from "react";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LinkButtonRow from "./LinkButtonRow";

export default {
  title: "Components/Molecules/LinkButtonRow",
  component: LinkButtonRow,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

const PrimaryButtonRow = () => {
  const props1 = {
    label: "Next",
    href: "next",
  };
  const props2 = {
    label: "Prev",
    href: "prev",
  };

  return (
    <LinkButtonRow>
      <LinkButton {...props1} />
      <LinkButton {...props2} />
    </LinkButtonRow>
  );
};

export const Primary = {
  render: () => <PrimaryButtonRow />,
};
