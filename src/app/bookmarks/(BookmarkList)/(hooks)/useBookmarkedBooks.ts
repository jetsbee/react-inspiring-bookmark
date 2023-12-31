import { Book } from "@/state/book/book.type";
import { useGoogleBookQueries } from "@/state/book/googleBook/server";
import { useBookmarks } from "@/state/bookmarks/client";

const useBookmarkedBooks = () => {
  const bookmarks = useBookmarks();
  const ids = Object.keys(bookmarks);

  const assertBookmarkedBook = (data?: Book | null): data is Book => {
    return data ? true : false;
  };

  const books = useGoogleBookQueries(ids)
    .map(({ data }) => data)
    .filter(assertBookmarkedBook);

  return books;
};

export default useBookmarkedBooks;
