import { useBookmarks } from "@/state/bookmarks/client";
import { useGoogleBookQueries } from "@/state/book/googleBook/server";
import { Book } from "@/state/book/book.type";

const useBookmarkedBooks = () => {
  const bookmarks = useBookmarks();
  const isbns = Object.keys(bookmarks);

  const assertBookmarkedBook = (data?: Book | null): data is Book => {
    return data ? true : false;
  };

  const books = useGoogleBookQueries(isbns)
    .map(({ data }) => data)
    .filter(assertBookmarkedBook);

  return books;
};

export default useBookmarkedBooks;
