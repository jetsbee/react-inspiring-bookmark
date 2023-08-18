import type { Meta, StoryObj } from "@storybook/react";

import { GlobalLayout } from "app/src/components/GlobalLayout";
import { BookmarksScreen } from "app/src/pages/Bookmarks";
import { Providers } from "app/src/providers";

const meta: Meta<typeof BookmarksScreen> = {
  title: "BookmarksScreen",
  component: BookmarksScreen,
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
type Story = StoryObj<typeof BookmarksScreen>;

export const Default: Story = {};
