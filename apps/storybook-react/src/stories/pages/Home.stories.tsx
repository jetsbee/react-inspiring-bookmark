import type { Meta, StoryObj } from "@storybook/react";

import { GlobalLayout } from "app/src/components/GlobalLayout";
import { NYTimesBookList } from "app/src/components/NYTimesBookList";
import { Providers } from "app/src/providers";

const HomeScreen = () => {
  return <NYTimesBookList />;
};

const meta: Meta<typeof HomeScreen> = {
  title: "HomeScreen",
  component: HomeScreen,
  tags: ["autodocs"],
  decorators: [
    (story) => (
      <Providers>
        <GlobalLayout>{story()}</GlobalLayout>
      </Providers>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HomeScreen>;

export const Default: Story = {};
