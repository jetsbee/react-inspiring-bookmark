"use client";

import { useState } from "react";

const useShowMore = () => {
  const [showMore, setShowMore] = useState(false);

  const MIN_TEXT_LENGTH_LIMIT = 250;

  const onToggle = () => {
    setShowMore((state) => !state);
  };

  return { showMore, onToggle, MIN_TEXT_LENGTH_LIMIT };
};

export default useShowMore;
