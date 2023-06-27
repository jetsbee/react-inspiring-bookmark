"use client";

import BookListView from "@/components/BookListView/BookListView";
import { StyledH2, StyledP } from "./BookmarkList.styled";
import useBookmarkedBooks from "./(hooks)/useBookmarkedBooks";

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
    <>
      <BookListView {...props} />
    </>
  );
};

export default BookmarkList;
