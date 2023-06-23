import { getBestsellerBooks } from "@/utils/api";
import getQueryClient from "@/utils/getQueryClient";
import { BESTSELLER_BOOKS_QK } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface Book {
  isbn: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  language: string;
  imageLinks?: ImageLinks;
}

const prefetchBestsellerBooksQuery = async () => {
  const queryClient = getQueryClient();
  return await queryClient.prefetchQuery(
    BESTSELLER_BOOKS_QK,
    getBestsellerBooks
  );
};

// typing - ref. https://github.com/TanStack/query/discussions/1195#discussioncomment-110896
const useBestsellerBooksQuery = <T extends any = Book[]>(
  select?: (data: Book[]) => T
) =>
  useQuery({
    queryKey: BESTSELLER_BOOKS_QK,
    queryFn: getBestsellerBooks,
    select,
  });

export { prefetchBestsellerBooksQuery, useBestsellerBooksQuery };
