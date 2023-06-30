import { useBestsellerBooksQuery } from "@/state/book/bestSellers/server";
import { Book } from "@/state/book/book.type";

const useBestSellerBooks = () => {
  const { data } = useBestsellerBooksQuery();

  return data;
};

export default useBestSellerBooks;
