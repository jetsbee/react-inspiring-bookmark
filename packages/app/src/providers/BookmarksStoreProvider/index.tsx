"use client";

import { useRef } from "react";
import {
  BookmarksProps,
  BookmarksStore,
  bookmarksStore,
  createBookmarksStore,
} from "../../state/bookmarks/store";
import { BookmarksContext } from "../../utils/zustandContext";

type BookmarksStoreProviderProps = React.PropsWithChildren<BookmarksProps>;

export const BookmarksStoreProvider = ({
  children,
  ...props
}: BookmarksStoreProviderProps) => {
  const storeRef = useRef<BookmarksStore>();
  if (!storeRef.current) {
    bookmarksStore.persist.clearStorage();
    storeRef.current = createBookmarksStore(props);
  }
  return (
    <BookmarksContext.Provider value={storeRef.current}>
      {children}
    </BookmarksContext.Provider>
  );
};
