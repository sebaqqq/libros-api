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

export interface BookContextType {
  books: Book[];
  favorites: Book[];
  addBook: (book: Book) => void;
  addFavorite: (book: Book) => void;
  removeFavorite: (id: string) => void;
}
