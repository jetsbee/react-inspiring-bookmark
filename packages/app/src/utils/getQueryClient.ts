import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
// Ref. React query with SSR in next.js app router - https://tanstack.com/query/latest/docs/react/guides/ssr#using-hydrate
// Ref. React Cache - https://nextjs.org/docs/app/building-your-application/data-fetching/caching#react-cache
