import type { Meta, StoryObj } from "@storybook/react";
import BookmarkStar from "./BookmarkStar";

const meta: Meta<typeof BookmarkStar> = {
  title: "BookmarkStar",
  component: BookmarkStar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BookmarkStar>;

export const Default: Story = {
  args: {
    id: "BOOK_ID_0",
  },
};
