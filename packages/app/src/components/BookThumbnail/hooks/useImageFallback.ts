"use client";

import { useEffect, useState } from "react";

export const useImageFallback = (thumbnail_path?: string) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [thumbnail_path]);

  const handleOnError = () => {
    setImageError(true);
  };

  const hasNoImage = () => {
    return thumbnail_path === undefined || imageError;
  };

  return { handleOnError, hasNoImage };
};
