import { NextResponse } from "next/server";
import { convert } from "html-to-text";

const getBookByIdFromGoogle = async (id: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}?fields=id,volumeInfo/title,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/language,volumeInfo/industryIdentifiers&key=${process.env.GOOGLE_BOOKS_API_KEY}`;

  const data = await (await fetch(url)).json();

  return data;
};

const getGoogleBookById = async (googleId: string) => {
  const { id, volumeInfo } = await getBookByIdFromGoogle(googleId);
  if (id === undefined) return null;

  const book = {
    ...volumeInfo,
    id,
    description: volumeInfo?.description && convert(volumeInfo.description),
  };
  return book;
};

export const GET = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const book = await getGoogleBookById(id);
  return NextResponse.json(book, {
    status: 200,
  });
};
