import type { Meta, StoryObj } from "@storybook/react";
import BookThumbnail from "./BookThumbnail";

const meta: Meta<typeof BookThumbnail> = {
  title: "BookThumbnail",
  component: BookThumbnail,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BookThumbnail>;

export const Default: Story = {
  args: {
    title: "Baboon Book",
    thumbnail: "/4.2.03.png",
  },
};

export const NoImage: Story = {
  args: {
    title: "No Image Book",
    thumbnail: "/404.png",
  },
};
