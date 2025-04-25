import React, { createContext, useContext, useState } from "react";
import { Book, BookContextType } from "./type";

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context)
    throw new Error("useBookContext must be used within a BookProvider");
  return context;
};

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [favorites, setFavorites] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const addFavorite = (book: Book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((book) => book.id !== id)
    );
  };

  return (
    <BookContext.Provider
      value={{ books, favorites, addBook, addFavorite, removeFavorite }}
    >
      {children}
    </BookContext.Provider>
  );
};
