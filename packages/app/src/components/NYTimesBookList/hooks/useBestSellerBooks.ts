"use client";

import { useBestsellerBooksQuery } from "../../../state/book/bestSellers/server";

export const useBestSellerBooks = () => {
  const { data } = useBestsellerBooksQuery();

  return data;
};
