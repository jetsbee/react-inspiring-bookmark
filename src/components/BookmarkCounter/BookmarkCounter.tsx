"use client";

import { useIsClient } from "@/hooks/isCilent";
import { useBookmarks } from "@/state/bookmarks/client";

const BookmarkCounter = () => {
  const bookmarks = useBookmarks();
  const numOfBookmarks = Object.keys(bookmarks).length;
  const isClient = useIsClient();

  if (numOfBookmarks === 0 || !isClient) {
    return undefined;
  } else {
    return <span>({numOfBookmarks})</span>;
  }
};

export default BookmarkCounter;
