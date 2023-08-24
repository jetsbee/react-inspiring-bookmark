import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { addResetter } from "../../utils/zustandUtils";

export interface BookmarksProps {
  bookmarks: {
    [id: string]: true;
  };
}

export interface BookmarksActions {
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
}

export interface BookmarksState extends BookmarksProps {
  actions: () => BookmarksActions;
}

export const createBookmarksStore = (initProps?: Partial<BookmarksProps>) => {
  const DEFAULT_PROPS: BookmarksProps = {
    bookmarks: {},
  };

  const store = createStore<BookmarksState>()(
    persist(
      (set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
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

  // if store does not use context provider
  if (initProps === undefined) {
    addResetter(store, () => store.setState({ ...DEFAULT_PROPS }));
  }

  return store;
};

export type BookmarksStore = ReturnType<typeof createBookmarksStore>;

export const bookmarksStore = createBookmarksStore();
