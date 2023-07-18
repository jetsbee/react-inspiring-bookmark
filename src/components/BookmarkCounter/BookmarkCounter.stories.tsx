import BookmarksStoreProvider from "@/utils/providers/BookmarksStoreProvider";
import type { Meta, StoryObj } from "@storybook/react";
import BookmarkCounter from "./BookmarkCounter";

const MockedStateWithEmpty = { bookmarks: {} };
const typedTrue: true = true;
export const MockedStateWithOneBookmarked = {
  bookmarks: { "6_CLEAAAQBAJ": typedTrue },
};

const meta: Meta<typeof BookmarkCounter> = {
  title: "BookmarkCounter",
  component: BookmarkCounter,
  tags: ["autodocs"],
  excludeStories: /.*MockedStateWithOneBookmarked$/,
};

export default meta;
type Story = StoryObj<typeof BookmarkCounter>;

export const WithOneMarked: Story = {
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

export const Empty: Story = {
  decorators: [
    (story) => {
      return (
        <BookmarksStoreProvider {...MockedStateWithEmpty}>
          {story()}
        </BookmarksStoreProvider>
      );
    },
  ],
};
