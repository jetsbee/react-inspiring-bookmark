import type { Meta, StoryObj } from "@storybook/react";
import BookDescription from "./BookDescription";

const meta: Meta<typeof BookDescription> = {
  title: "BookDescription",
  component: BookDescription,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BookDescription>;

const TEXT_WITH_250_LENGTH = "abcd 01234 !@#$ qwerty .?".repeat(10);

export const Over250Characters: Story = {
  args: {
    children: TEXT_WITH_250_LENGTH + "1",
  },
};

export const Exact250Characters: Story = {
  args: {
    children: TEXT_WITH_250_LENGTH,
  },
};

export const Less250Characters: Story = {
  args: {
    children: "1",
  },
};
