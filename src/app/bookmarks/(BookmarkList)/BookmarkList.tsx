"use client";

import BookListView from "@/components/BookListView/BookListView";
import { StyledH2 } from "./BookmarkList.styled";
import useBookmarkedBooks from "./(hooks)/useBookmarkedBooks";

const BookmarkList = () => {
  const data = useBookmarkedBooks();

  const props = {
    books: data ?? [],
  };

  return (
    <>
      <StyledH2>My Bookmark List</StyledH2>
      <BookListView {...props} />
    </>
  );
};

export default BookmarkList;
