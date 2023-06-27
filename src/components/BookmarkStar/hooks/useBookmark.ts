import { useBookmarks, useBookmarksActions } from "@/state/bookmarks/client";

const useBookmark = (isbn: string) => {
  const bookmarks = useBookmarks();
  const { addBookmark, removeBookmark } = useBookmarksActions();

  const isBookmarked = bookmarks.hasOwnProperty(isbn);
  const toggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(isbn);
    } else {
      addBookmark(isbn);
    }
  };

  return {
    isBookmarked,
    toggleBookmark,
  };
};

export default useBookmark;
