import RootPageMeta from "@/app/(Root)/page.stories";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import SearchPage from "./page";
import { searchedBooksDB } from "./page.stories.data";

const meta: Meta<typeof SearchPage> = {
  title: "SearchPage",
  component: SearchPage,
  tags: ["autodocs"],
  decorators: RootPageMeta.decorators,
};

export default meta;
type Story = StoryObj<typeof SearchPage>;

const urlPathForBooksByKeywordsAndStartIndex = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-keywords/:keywords/:startIndex`;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        query: {
          keywords: "santa+claus",
        },
      },
    }, // ref. https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
    msw: {
      handlers: [
        rest.get(urlPathForBooksByKeywordsAndStartIndex, (req, res, ctx) => {
          const keywords = req.params.keywords as string;
          const startIndex = req.params.startIndex as string;
          const data =
            (searchedBooksDB[keywords] &&
              searchedBooksDB[keywords][startIndex]) ??
            [];

          return res(ctx.json(data));
        }),
      ],
    },
  },
};

export const EmptySearchQuery: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
