export interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export interface Book {
  id: string;
  name: string;
  author: string;
  released: string;
  publisher: string;
  country: string;
  mediaType: string;
  numberOfPages: number;
}
