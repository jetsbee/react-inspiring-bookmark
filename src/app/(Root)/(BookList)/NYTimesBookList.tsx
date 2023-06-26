"use client";

import BookListView from "@/components/BookListView/BookListView";
import { useBestsellerBooksQuery } from "@/state/bestsellerBooks";
import { StyledH2 } from "./NYTimesBookList.styled";

const BookList = () => {
  const { data } = useBestsellerBooksQuery();

  const props = {
    books: data ?? [],
  };

  return (
    <>
      <StyledH2>The New York Times Best Sellers</StyledH2>
      <BookListView {...props} />
    </>
  );
};

export default BookList;
