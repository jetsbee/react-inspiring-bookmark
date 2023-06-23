"use client";

import BookListView from "@/components/BookListView/BookListView";
import { useBestsellerBooksQuery } from "@/state/bestsellerBooks";

const BookList = () => {
  const { data } = useBestsellerBooksQuery();

  const props = {
    books: data ?? [],
  };

  return <BookListView {...props} />;
};

export default BookList;
