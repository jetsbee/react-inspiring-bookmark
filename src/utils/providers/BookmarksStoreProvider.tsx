"use client";

import {
  BookmarksProps,
  BookmarksStore,
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
    storeRef.current = createBookmarksStore(props);
  }
  return (
    <BookmarksContext.Provider value={storeRef.current}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksStoreProvider;
