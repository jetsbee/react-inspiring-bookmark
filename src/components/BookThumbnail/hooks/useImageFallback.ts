import { useState } from "react";

const useImageFallback = (thumbnail_path?: string) => {
  const [imageError, setImageError] = useState(false);

  const handleOnError = () => {
    setImageError(true);
  };

  const hasNoImage = () => {
    return thumbnail_path === undefined || imageError;
  };

  return { handleOnError, hasNoImage };
};

export default useImageFallback;
