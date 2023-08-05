import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
  title: "ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {};
