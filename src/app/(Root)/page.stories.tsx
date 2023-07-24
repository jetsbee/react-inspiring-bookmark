import { BooksMockDB } from "@/components/BookListView/BookListView.stories";
import BookSearchForm from "@/components/BookSearchForm/BookSearchForm";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import { StyledMain } from "@/components/StyledPage/page.styled";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { rest } from "msw";
import NYTimesBookList from "./(BookList)/NYTimesBookList";
import { clickBookmarkStar_EmptyBookmark_BookmarkCounterEqualToOne } from "./page.stories.test";

const RootPage = () => {
  return (
    <StyledMain>
      <BookSearchForm />
      <NYTimesBookList />
    </StyledMain>
  );
}; // ref. https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs#stories-for-pagescomponents-which-fetch-data

const meta: Meta<typeof RootPage> = {
  title: "RootPage",
  component: RootPage,
  tags: ["autodocs"],
  decorators: [
    (story) => {
      return (
        <>
          <GlobalHeader />
          {story()}
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof RootPage>;

const urlPathForBestsellerIsbns = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bestsellers/isbns`;
const urlPathForBookByIsbn = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-isbn/:isbn`;
const isbnsMock = [
  "9781649374042", // Fourth Wing
  "9780316258777", // The Five-Star Weekend
];

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    }, // ref. https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
    msw: {
      handlers: [
        rest.get(urlPathForBestsellerIsbns, (req, res, ctx) => {
          return res(ctx.json(isbnsMock));
        }),
        rest.get(urlPathForBookByIsbn, (req, res, ctx) => {
          const isbn = req.params.isbn as string;
          const data = BooksMockDB[isbn];
          return res(ctx.json(data));
        }),
      ],
    },
  },
};

export const FirstBookmarkButtonClicked: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await clickBookmarkStar_EmptyBookmark_BookmarkCounterEqualToOne(canvas);
  },
};
