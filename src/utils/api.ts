const getBestsellerIsbns = async (): Promise<`${number}`[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bestsellers/isbns`;
  return await (await fetch(url)).json();
};

export const getBookByIsbn = async (isbn: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-isbn/${isbn}`;
  const json = await (await fetch(url)).json();
  if (json !== null) json.isbn = isbn;

  return json;
};

export const getBestsellerBooks = async () => {
  const isbns = await getBestsellerIsbns();
  const settledResults = await Promise.allSettled(
    isbns.map((isbn) => getBookByIsbn(isbn))
  );

  const assertFulfilled = <T>(
    item: PromiseSettledResult<T>
  ): item is PromiseFulfilledResult<T> => item.status === "fulfilled";

  const books = settledResults.filter(assertFulfilled).map((res) => res.value);
  return books;
};
