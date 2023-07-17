"use client";

import {
  BookmarksProps,
  BookmarksStore,
  bookmarksStore,
  createBookmarksStore,
} from "@/state/bookmarks/store";
import { useRef } from "react";
import { BookmarksContext } from "../zustandContext";

type BookmarksStoreProviderProps = React.PropsWithChildren<BookmarksProps>;

const BookmarksStoreProvider = ({
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

export default BookmarksStoreProvider;
