import Footer from "./Footer";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export const Primary = {
  args: {
    company: "ABC Corp.",
  },
};
