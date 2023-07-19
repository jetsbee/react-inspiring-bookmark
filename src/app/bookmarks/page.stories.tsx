import type { Meta, StoryObj } from "@storybook/react";
import BookmarksPage from "./page";

const meta: Meta<typeof BookmarksPage> = {
  title: "BookmarksPage",
  component: BookmarksPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BookmarksPage>;

export const Default: Story = {};
