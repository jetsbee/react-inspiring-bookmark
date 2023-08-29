import { NextResponse } from "next/server";

const getBooksByIsbnFromGoogle = async (isbn: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&fields=items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/language)&key=${process.env.GOOGLE_BOOKS_API_KEY}`;

  const data = await (await fetch(url)).json();

  return data;
};

const getGoogleBookByIsbn = async (isbn: string) => {
  const { items } = await getBooksByIsbnFromGoogle(isbn);
  const { id, volumeInfo } = (items && items[0]) || {};

  if (id === undefined) return null;

  const book = { ...volumeInfo, id };
  return book;
};

export const GET = async (
  request: Request,
  { params: { isbn } }: { params: { isbn: string } }
) => {
  const book = await getGoogleBookByIsbn(isbn);

  return NextResponse.json(book, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
