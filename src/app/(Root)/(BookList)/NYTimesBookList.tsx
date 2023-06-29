"use client";

import BookListView from "@/components/BookListView/BookListView";
import { StyledH2 } from "./NYTimesBookList.styled";
import useBestSellerBooks from "./(hooks)/useBestSellerBooks";

const NYTimesBookList = () => {
  const data = useBestSellerBooks();

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

export default NYTimesBookList;
