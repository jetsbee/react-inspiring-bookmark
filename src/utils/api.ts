import { Book, ImageLinks } from "@/state/book/book.type";

const castBook = ({
  id,
  title,
  authors,
  publishedDate,
  description,
  language,
  imageLinks,
}: {
  id: string;
  title?: string;
  authors?: string[];
  publishedDate?: string;
  description?: string;
  language?: string;
  imageLinks?: ImageLinks;
}): Book => {
  return {
    id,
    title: title ?? "Unknown",
    authors: authors ?? ["Unknown"],
    publishedDate: publishedDate ?? "0000",
    description: description ?? "",
    language: language ?? "Unknown",
    imageLinks,
  };
};

const assertBook = (book: Book | null): book is Book => book !== null;

const getBestsellerIsbns = async (): Promise<`${number}`[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bestsellers/isbns`;
  return await (await fetch(url)).json();
};

const getBookByIsbn = async (isbn: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-isbn/${isbn}`;
  const json = await (await fetch(url)).json();

  const book = json ? castBook(json) : null;
  return book;
};

export const getBookById = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-id/${id}`;
  const json = await (await fetch(url)).json();

  const book = json ? castBook(json) : null;
  return book;
};

export const getBestsellerBooks = async () => {
  const isbns = await getBestsellerIsbns();
  const settledResults = await Promise.allSettled(
    isbns.map((isbn) => getBookByIsbn(isbn))
  );

  const assertFulfilled = <T>(
    item: PromiseSettledResult<T>
  ): item is PromiseFulfilledResult<T> => item.status === "fulfilled";

  const books = settledResults
    .filter(assertFulfilled)
    .map((res) => res.value)
    .filter(assertBook);

  return books;
};

export const getBooksByKeywordsAndStartIndex = async (
  keywords: string,
  startIndex: number
) => {
  if (!Number.isInteger(startIndex) || startIndex < 0) {
    throw new Error("startIndex params should be 0 or positive integer.");
  }
  if (keywords === "") return [];

  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/by-keywords/${keywords}/${startIndex}`;
  const json = await (await fetch(url)).json();

  const books: Book[] = json.filter(assertBook).map(castBook);
  return books;
};
