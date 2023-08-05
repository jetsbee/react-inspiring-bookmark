import type { Meta, StoryObj } from "@storybook/react";
import MainHeadingView from "./MainHeadingView";

const meta: Meta<typeof MainHeadingView> = {
  title: "MainHeadingView",
  component: MainHeadingView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainHeadingView>;

export const Default: Story = {
  args: {
    children: "Inspiring bookmark",
  },
};
