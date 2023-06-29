"use client";

import { useState } from "react";
import useBookmark from "./useBookmark";

const useConfirmBookmark = (id: string) => {
  const { toggleBookmark, isBookmarked } = useBookmark(id);
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
