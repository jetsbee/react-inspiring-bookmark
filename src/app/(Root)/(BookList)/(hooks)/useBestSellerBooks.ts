import { Book, useBestsellerBooksQuery } from "@/state/book/bestSellers/server";

const useBestSellerBooks = () => {
  const { data } = useBestsellerBooksQuery();
  const assertBook = (book: Book | null): book is Book => book !== null;

  return data?.filter(assertBook);
};

export default useBestSellerBooks;
