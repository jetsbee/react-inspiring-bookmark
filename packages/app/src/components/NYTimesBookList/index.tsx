"use client";

import { BookListView } from "../BookListView";
import { StyledH1 } from "./NYTimesBookList.styled";
import { useBestSellerBooks } from "./hooks/useBestSellerBooks";

export const NYTimesBookList = () => {
  const data = useBestSellerBooks();

  const props = {
    books: data ?? [],
  };

  return (
    <>
      <StyledH1>The New York Times Best Sellers</StyledH1>
      <BookListView {...props} />
    </>
  );
};
