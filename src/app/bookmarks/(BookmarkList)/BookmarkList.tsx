"use client";

import BookListView from "@/components/BookListView/BookListView";
import useBookmarkedBooks from "./(hooks)/useBookmarkedBooks";
import { StyledP } from "./BookmarkList.styled";

const BookmarkList = () => {
  const data = useBookmarkedBooks();

  const props = {
    books: data ?? [],
  };

  return props.books.length === 0 ? (
    <StyledP>
      {`"`}A room without books is like a body without a soul.{`"`}
    </StyledP>
  ) : (
    <BookListView {...props} />
  );
};

export default BookmarkList;
