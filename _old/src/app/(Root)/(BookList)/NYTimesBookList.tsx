"use client";

import BookListView from "@/components/BookListView/BookListView";
import useBestSellerBooks from "./(hooks)/useBestSellerBooks";
import { StyledH2 } from "./NYTimesBookList.styled";

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
