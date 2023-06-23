interface Book {
  isbn: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  imageLinks?: {
    thumbnail: string;
  };
}

export interface Props {
  books: Book[];
}
