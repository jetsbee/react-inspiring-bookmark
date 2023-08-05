import { getBestsellerBooks } from "@/utils/api";
import { BESTSELLER_BOOKS_QK } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../book.type";

// typing - ref. https://github.com/TanStack/query/discussions/1195#discussioncomment-110896
const useBestsellerBooksQuery = <T extends any = Book[]>(
  select?: (data: Book[]) => T
) =>
  useQuery({
    queryKey: BESTSELLER_BOOKS_QK,
    queryFn: getBestsellerBooks,
    select,
  });

export { useBestsellerBooksQuery };
