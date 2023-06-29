import { NextResponse } from "next/server";
import { NytimesBook } from "../../(types)/nytimes.type";

const getNytimesHardcoverFictionBooks = async () => {
  const url = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${process.env.NYTIMES_BOOKS_API_KEY}&list=hardcover-fiction`;

  return await (await fetch(url)).json();
};

const getIsbns = async () => {
  const { results: books } = await getNytimesHardcoverFictionBooks();
  const isbns = books.map(
    (book: NytimesBook) => book.book_details[0].primary_isbn13
  );
  return isbns;
};

export const GET = async (request: Request) => {
  const isbns = await getIsbns();
  return NextResponse.json(isbns, {
    status: 200,
  });
};
