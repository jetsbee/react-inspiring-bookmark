import { useBookmarks } from "@/state/bookmarks/client";
import {
  GoogleBook,
  useGoogleBookQueries,
} from "@/state/book/googleBook/server";

const useBookmarkedBooks = () => {
  const bookmarks = useBookmarks();
  const isbns = Object.keys(bookmarks);

  const assertGoogleBook = (data?: GoogleBook | null): data is GoogleBook => {
    return data ? true : false;
  };

  const books = useGoogleBookQueries(isbns)
    .map(({ data }) => data)
    .filter(assertGoogleBook);

  return books;
};

export default useBookmarkedBooks;
