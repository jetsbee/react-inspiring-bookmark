"use client";

import { useContext } from "react";
import { BookmarksContext } from "../../utils/zustandContext";
import { createBoundedUseStore } from "../../utils/zustandUtils";
import { BookmarksState, bookmarksStore } from "./store";

const useBookmarksStoreCreator = () => {
  const storeFromContext = useContext(BookmarksContext);

  return !storeFromContext
    ? createBoundedUseStore(bookmarksStore)
    : createBoundedUseStore(storeFromContext);
};

const useBookmarksStore = <T>(
  selector?: (state: BookmarksState) => T,
  equals?: (a: T, b: T) => boolean
) => {
  const useBookmarksStoreFromCreator = useBookmarksStoreCreator();
  return useBookmarksStoreFromCreator(selector!, equals);
};

export const useBookmarksActions = () =>
  useBookmarksStore((state) => state.actions());

export const useBookmarks = () =>
  useBookmarksStore(({ bookmarks }) => bookmarks);
