"use client";

import { Book } from "@/state/book/book.type";
import { useGoogleBooksByKeywordsAndStartIndexQuery } from "@/state/book/googleBook/server";
import { useEffect, useState } from "react";

const useSearchBooks = (keywords: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [index, setIndex] = useState(0);
  const { data = [], isLoading } = useGoogleBooksByKeywordsAndStartIndexQuery(
    keywords,
    index
  );
  const isAbleToRequest = !isLoading && data.length !== 0;

  useEffect(() => {
    if (isAbleToRequest) {
      setBooks((state) =>
        [...state, ...data].filter((value, index, self) => {
          return index === self.findIndex((t) => t.id === value.id);
        })
      );
    }
  }, [data, isAbleToRequest, isLoading]);

  const handleRequestMoreBooks = () => {
    setIndex(books.length);
  };

  return {
    books,
    handleRequestMoreBooks,
    isAbleToRequestMore: isAbleToRequest,
  };
};

export default useSearchBooks;
