import BookmarksStoreProvider from "@/utils/providers/BookmarksStoreProvider";
import type { Meta, StoryObj } from "@storybook/react";
import { MockedStateWithOneBookmarked } from "../BookmarkCounter/BookmarkCounter.stories";
import GlobalHeader from "./GlobalHeader";

const meta: Meta<typeof GlobalHeader> = {
  title: "GlobalHeader",
  component: GlobalHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GlobalHeader>;

export const Default: Story = {};

export const WithOneBookmarked: Story = {
  decorators: [
    (story) => {
      return (
        <BookmarksStoreProvider {...MockedStateWithOneBookmarked}>
          {story()}
        </BookmarksStoreProvider>
      );
    },
  ],
};
