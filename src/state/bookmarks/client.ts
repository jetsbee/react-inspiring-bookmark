import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarksState {
  bookmarks: {
    [id: string]: true;
  };
}

interface BookmarksActions {
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
}

const useBookmarksStore = create<
  BookmarksState & { actions: () => BookmarksActions }
>()(
  persist(
    (set) => ({
      bookmarks: {},
      actions: () => ({
        addBookmark: (id) =>
          set(({ bookmarks }) => ({
            bookmarks: { [id]: true, ...bookmarks },
          })), // End of addBookmark()
        removeBookmark: (id) =>
          set(({ bookmarks }) => {
            const { [id]: removedItem, ...rest } = bookmarks;
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
