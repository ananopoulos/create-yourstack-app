import Hero from "./Hero";

export default {
  title: "Components/Organisms/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export const Primary = {
  args: {},
};
