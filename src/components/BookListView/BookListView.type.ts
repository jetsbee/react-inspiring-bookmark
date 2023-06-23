interface Book {
  isbn: string;
  title: string;
  imageLinks?: {
    thumbnail: string;
  };
}

export interface Props {
  books: Book[];
}
