import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarksState {
  bookmarks: {
    [isbn: string]: true;
  };
}

interface BookmarksActions {
  addBookmark: (isbn: string) => void;
  removeBookmark: (isbn: string) => void;
}

const useBookmarksStore = create<
  BookmarksState & { actions: () => BookmarksActions }
>()(
  persist(
    (set) => ({
      bookmarks: {},
      actions: () => ({
        addBookmark: (isbn) =>
          set(({ bookmarks }) => ({
            bookmarks: { [isbn]: true, ...bookmarks },
          })), // End of addBookmark()
        removeBookmark: (isbn) =>
          set(({ bookmarks }) => {
            const { [isbn]: removedItem, ...rest } = bookmarks;
            return { bookmarks: rest };
          }), // End of removeBookmark()
      }),
    }),
    { name: "bookmarks-storage" }
  )
);

const useBookmarksActions = () => useBookmarksStore((state) => state.actions());

const useBookmarks = () => useBookmarksStore(({ bookmarks }) => bookmarks);

export { useBookmarksActions, useBookmarks };
