import getQueryClient from "@/utils/getQueryClient";
import { getBestsellerBooks } from "@/utils/api";
import { BESTSELLER_BOOKS_QK } from "@/utils/queryKeys";

const prefetchBestsellerBooksQuery = async () => {
  const queryClient = getQueryClient();
  return await queryClient.prefetchQuery(
    BESTSELLER_BOOKS_QK,
    getBestsellerBooks
  );
};

export { prefetchBestsellerBooksQuery };
