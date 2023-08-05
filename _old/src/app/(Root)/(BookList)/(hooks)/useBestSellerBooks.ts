import { useBestsellerBooksQuery } from "@/state/book/bestSellers/server";

const useBestSellerBooks = () => {
  const { data } = useBestsellerBooksQuery();

  return data;
};

export default useBestSellerBooks;
