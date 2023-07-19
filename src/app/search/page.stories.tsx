import type { Meta, StoryObj } from "@storybook/react";
import SearchPage from "./page";

const meta: Meta<typeof SearchPage> = {
  title: "SearchPage",
  component: SearchPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchPage>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  }, // ref. https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
};
