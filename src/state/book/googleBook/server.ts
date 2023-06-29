import { getBestsellerBooks, getBookByIsbn } from "@/utils/api";
import { getGoogleBookQk } from "@/utils/queryKeys";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";
import { Book } from "../book.type";

const useGoogleBookQueries = <T extends any = Book | null>(
  isbns: string[],
  select?: (data: Book | null) => T
) => {
  return useQueries({
    queries: isbns.map<UseQueryOptions<Book | null, unknown, T>>((isbn) => {
      return {
        queryKey: getGoogleBookQk(isbn),
        queryFn: () => getBookByIsbn(isbn),
        select,
      };
    }),
  });
};

export { useGoogleBookQueries };
