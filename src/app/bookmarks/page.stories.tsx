import RootPageMeta from "@/app/(Root)/page.stories";
import { BooksMockDB } from "@/components/BookListView/BookListView.stories";
import {
  MockedStateWithEmpty,
  MockedStateWithTwoBookmarked,
} from "@/components/BookmarkCounter/BookmarkCounter.stories";
import BookmarksStoreProvider from "@/utils/providers/BookmarksStoreProvider";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import BookmarksPage from "./page";

const urlPathForBookByGoogleBookId = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-id/:googleBookId`;

const meta: Meta<typeof BookmarksPage> = {
  title: "BookmarksPage",
  component: BookmarksPage,
  tags: ["autodocs"],
  parameters: {
    msw: {
      handlers: [
        rest.get(urlPathForBookByGoogleBookId, (req, res, ctx) => {
          const id = req.params.googleBookId as string;
          const book = Object.values(BooksMockDB).find(
            (book) => book.id === id
          );
          return res(ctx.json(book));
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BookmarksPage>;

// There's error on browser console. (Something with BookmarksStoreProvider and MSW)
// ref. https://github.com/mswjs/msw/issues/1640#issuecomment-1642283698
export const Default: Story = {
  decorators: [
    ...RootPageMeta.decorators!,
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
    ...RootPageMeta.decorators!,
    (story) => {
      return (
        <BookmarksStoreProvider {...MockedStateWithEmpty}>
          {story()}
        </BookmarksStoreProvider>
      );
    },
  ],
};
