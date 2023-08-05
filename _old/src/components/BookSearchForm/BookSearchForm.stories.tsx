import type { Meta, StoryObj } from "@storybook/react";
import BookSearchForm from "./BookSearchForm";

const meta: Meta<typeof BookSearchForm> = {
  title: "BookSearchForm",
  component: BookSearchForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BookSearchForm>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  }, // ref. https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
};
