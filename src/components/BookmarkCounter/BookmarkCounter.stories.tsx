import BookmarksStoreProvider from "@/utils/providers/BookmarksStoreProvider";
import type { Meta, StoryObj } from "@storybook/react";
import BookmarkCounter from "./BookmarkCounter";

const typedTrue: true = true;
const MockedStateWithOneBookmarked = {
  bookmarks: { "6_CLEAAAQBAJ": typedTrue }, // Fourth Wing
};
export const MockedStateWithTwoBookmarked = {
  bookmarks: {
    "6_CLEAAAQBAJ": typedTrue, // Fourth Wing
    DdtjzwEACAAJ: typedTrue, // The Five-Star Weekend
  },
};
export const MockedStateWithEmpty = { bookmarks: {} };

const meta: Meta<typeof BookmarkCounter> = {
  title: "BookmarkCounter",
  component: BookmarkCounter,
  tags: ["autodocs"],
  excludeStories: /.*MockedStateWith/,
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

export const WithTwoMarked: Story = {
  decorators: [
    (story) => {
      return (
        <BookmarksStoreProvider {...MockedStateWithTwoBookmarked}>
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
