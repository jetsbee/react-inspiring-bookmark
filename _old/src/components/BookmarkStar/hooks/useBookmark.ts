import { useBookmarks, useBookmarksActions } from "@/state/bookmarks/client";

const useBookmark = (id: string) => {
  const bookmarks = useBookmarks();
  const { addBookmark, removeBookmark } = useBookmarksActions();

  const isBookmarked = bookmarks.hasOwnProperty(id);
  const toggleBookmark = (confirmed: boolean = true) => {
    if (!confirmed) return;

    if (isBookmarked) {
      removeBookmark(id);
    } else {
      addBookmark(id);
    }
  };

  return {
    isBookmarked,
    toggleBookmark,
  };
};

export default useBookmark;
