import { getBestsellerBooks, getBookByIsbn } from "@/utils/api";
import { getGoogleBookQk } from "@/utils/queryKeys";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface GoogleBook {
  isbn: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  language: string;
  imageLinks?: ImageLinks;
}

const useGoogleBookQueries = <T extends any = GoogleBook | null>(
  isbns: string[],
  select?: (data: GoogleBook | null) => T
) => {
  return useQueries({
    queries: isbns.map<UseQueryOptions<GoogleBook | null, unknown, T>>(
      (isbn) => {
        return {
          queryKey: getGoogleBookQk(isbn),
          queryFn: () => getBookByIsbn(isbn),
          select,
        };
      }
    ),
  });
};

export { useGoogleBookQueries };
