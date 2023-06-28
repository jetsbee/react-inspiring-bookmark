"use client";

import { useState } from "react";
import useBookmark from "./useBookmark";

const useConfirmBookmark = (isbn: string) => {
  const { toggleBookmark, isBookmarked } = useBookmark(isbn);
  const [needConfirm, setNeedConfirm] = useState(false);

  const toggleBookmarkWithConfirm = (confirmed: boolean) => {
    toggleBookmark(confirmed);
    setNeedConfirm(false);
  };

  return {
    isBookmarked,
    toggleBookmarkWithConfirm,
    needConfirm,
    askConfirm: () => setNeedConfirm(true),
  };
};

export default useConfirmBookmark;
