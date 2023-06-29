import { getBookById } from "@/utils/api";
import { getGoogleBookQk } from "@/utils/queryKeys";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";
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

export { useGoogleBookQueries };
