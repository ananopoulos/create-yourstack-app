import LinkButton from "./LinkButton";

export default {
  title: "Components/Atoms/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export const Primary = {
  args: {
    label: "Next",
    href: "nowhere",
  },
};
