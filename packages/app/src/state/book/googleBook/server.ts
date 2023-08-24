"use client";

import { UseQueryOptions, useQueries, useQuery } from "@tanstack/react-query";
import {
  getBookById,
  getBooksByKeywordsAndStartIndex,
} from "../../../utils/api";
import {
  getGoogleBookQk,
  getGoogleBooksByKeywordsAndStartIndexQk,
} from "../../../utils/queryKeys";
import { Book } from "../book.type";

const useGoogleBookQueries = <T extends any = Book | null>(
  ids: string[],
  select?: (data: Book | null) => T
) => {
  return useQueries({
    queries: ids.map<UseQueryOptions<Book | null, unknown, T>>((id) => {
      return {
        queryKey: getGoogleBookQk(id),
        queryFn: () => getBookById(id),
        select,
      };
    }),
  });
};

const useGoogleBooksByKeywordsAndStartIndexQuery = <T extends any = Book[]>(
  keywords: string,
  startIndex: number,
  select?: (data: Book[]) => T
) => {
  return useQuery({
    queryKey: getGoogleBooksByKeywordsAndStartIndexQk(keywords, startIndex),
    queryFn: () => getBooksByKeywordsAndStartIndex(keywords, startIndex),
    select,
  });
};

export { useGoogleBookQueries, useGoogleBooksByKeywordsAndStartIndexQuery };
