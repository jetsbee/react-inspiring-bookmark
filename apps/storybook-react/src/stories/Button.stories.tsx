import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "app/src/button";
import { Providers } from "app/src/providers";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(story) => <Providers>{story()}</Providers>],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Boop",
  },
};
