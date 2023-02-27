import PostCard from "./PostCard";

export default {
  title: "Components/Organisms/PostCard",
  component: PostCard,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export const Primary = {
  args: {
    title: "Title",
    description: "Description",
    href: "Href",
    image: "time-machine.webp",
    date: "January 1, 2023",
  },
};
