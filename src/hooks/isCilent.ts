import { useEffect, useState } from "react";

// ref. https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
