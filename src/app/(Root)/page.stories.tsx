import BookSearchForm from "@/components/BookSearchForm/BookSearchForm";
import { StyledMain } from "@/components/StyledPage/page.styled";
import type { Meta, StoryObj } from "@storybook/react";
import NYTimesBookList from "./(BookList)/NYTimesBookList";

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
};

export default meta;
type Story = StoryObj<typeof RootPage>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  }, // ref. https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
};
