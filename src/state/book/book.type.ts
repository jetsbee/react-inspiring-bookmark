export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface Book {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  language: string;
  imageLinks?: ImageLinks;
}
