import RootPageMeta from "@/app/(Root)/page.stories";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import SearchPage from "./page";
import { searchedBooksDB } from "./page.stories.data";

const urlPathForBooksByKeywordsAndStartIndex = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-keywords/:keywords/:startIndex`;

const meta: Meta<typeof SearchPage> = {
  title: "SearchPage",
  component: SearchPage,
  tags: ["autodocs"],
  decorators: RootPageMeta.decorators,
  parameters: {
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

export default meta;
type Story = StoryObj<typeof SearchPage>;

export const EmptySearchQuery: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const SantaClausSearch: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        query: {
          keywords: "santa+claus",
        },
      },
    }, // ref. https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
  },
};
