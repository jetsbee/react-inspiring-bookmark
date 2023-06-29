import { useBestsellerBooksQuery } from "@/state/book/bestSellers/server";
import { Book } from "@/state/book/book.type";

const useBestSellerBooks = () => {
  const { data } = useBestsellerBooksQuery();
  const assertBestSellerBook = (book: Book | null): book is Book =>
    book !== null;

  return data?.filter(assertBestSellerBook);
};

export default useBestSellerBooks;
