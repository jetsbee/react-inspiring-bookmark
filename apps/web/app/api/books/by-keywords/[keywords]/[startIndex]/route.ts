import { NextResponse } from "next/server";

const getBooksByKeywordsAndStartIndexFromGoogle = async (
  keywordsWithPlusSep: string,
  startIndex: number
) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keywordsWithPlusSep}&fields=items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/language,volumeInfo/industryIdentifiers)&maxResults=${40}&startIndex=${startIndex}&key=${
    process.env.GOOGLE_BOOKS_API_KEY
  }`;

  const data = await (await fetch(url)).json();

  return data;
};

const getGoogleBooksByKeywordsAndStartIndex = async (
  keywords: string,
  nStartIndex: number
) => {
  const { items } = await getBooksByKeywordsAndStartIndexFromGoogle(
    keywords,
    nStartIndex
  );
  const books = items?.map(
    ({ id, volumeInfo }: { id?: string; volumeInfo: any }) => {
      return id ? { ...volumeInfo, id } : null;
    }
  );

  return books ?? [];
};

export const GET = async (
  request: Request,
  {
    params: { keywords, startIndex },
  }: { params: { keywords: string; startIndex: string } }
) => {
  const nStartIndex = +(startIndex ?? 0);

  if (!Number.isInteger(nStartIndex) || nStartIndex < 0) {
    return NextResponse.json(
      { msg: "Please, check startIndex searchParams" },
      { status: 400 }
    );
  }

  const books = await getGoogleBooksByKeywordsAndStartIndex(
    keywords,
    nStartIndex
  );
  return NextResponse.json(books, {
    status: 200,
  });
};
