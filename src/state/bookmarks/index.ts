import { create } from "zustand";

interface BookmarksState {
  bookmarks: {
    [isbn: string]: true;
  };
}

interface BookmarksAction {
  addBookmark: (isbn: string) => void;
  removeBookmark: (isbn: string) => void;
}

const useBookmarksStore = create<BookmarksState & { actions: BookmarksAction }>(
  (set) => ({
    bookmarks: {},
    actions: {
      addBookmark: (isbn) =>
        set(({ bookmarks }) => ({
          bookmarks: { ...bookmarks, [isbn]: true },
        })), // End of addBookmark()
      removeBookmark: (isbn) =>
        set(({ bookmarks }) => {
          const { [isbn]: removedItem, ...rest } = bookmarks;
          return { bookmarks: rest };
        }), // End of removeBookmark()
    },
  })
);

const useBookmarksActions = () => useBookmarksStore((state) => state.actions);

const useBookmarks = () => useBookmarksStore(({ bookmarks }) => bookmarks);

export { useBookmarksActions, useBookmarks };
