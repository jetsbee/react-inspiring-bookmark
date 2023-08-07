import type { Meta, StoryObj } from "@storybook/react";

import { StyledLayout } from "app/src/components/Layout";
import HomeScreen from "app/src/pages/Home";
import { Providers } from "app/src/providers";

const meta: Meta<typeof HomeScreen> = {
  title: "HomeScreen",
  component: HomeScreen,
  tags: ["autodocs"],
  decorators: [
    (story) => (
      <Providers>
        <StyledLayout>{story()}</StyledLayout>
      </Providers>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HomeScreen>;

export const Default: Story = {};
