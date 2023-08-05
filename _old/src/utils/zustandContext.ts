import { BookmarksStore } from "@/state/bookmarks/store";
import { createContext } from "react";

export const BookmarksContext = createContext<BookmarksStore | null>(null);
// Ref 1. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#creating-a-context-with-reactcreatecontext
// Ref 2. https://github.com/vercel/next.js/blob/canary/examples/with-zustand/src/lib/store.ts
