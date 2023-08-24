export const BESTSELLER_BOOKS_QK = ["bestsellerBooks"];
export const getGoogleBookQk = (id: string) => ["googleBook", id];
export const getGoogleBooksByKeywordsAndStartIndexQk = (
  keywords: string,
  startIndex: number
) => ["GoogleBooksByKeywordsAndStartIndex", keywords, startIndex];
