"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
// ref 1. https://nextjs.org/docs/getting-started/react-essentials#rendering-third-party-context-providers-in-server-components
// ref 2. https://tanstack.com/query/latest/docs/react/guides/ssr#queryclientprovider-is-required-by-both-the-initialdata-and-hydrate-prefetching-approaches
