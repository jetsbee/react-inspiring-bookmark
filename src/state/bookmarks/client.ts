import { createBoundedUseStore } from "@/utils/zustandUtils";
import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

interface BookmarksState {
  bookmarks: {
    [id: string]: true;
  };
}

interface BookmarksActions {
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
}

type BookmarkStateAndActions = BookmarksState & {
  actions: () => BookmarksActions;
};

const bookmarksStore = createStore<BookmarkStateAndActions>()(
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

const useBookmarksStore = createBoundedUseStore(bookmarksStore);

const useBookmarksActions = () => useBookmarksStore((state) => state.actions());

const useBookmarks = () => useBookmarksStore(({ bookmarks }) => bookmarks);

export { useBookmarks, useBookmarksActions, useBookmarksStore };
