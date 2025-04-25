import { useState, useEffect } from "react";
import { useBookContext } from "../context/BookContext";

const useBooks = () => {
  const { addBook, books } = useBookContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://anapioficeandfire.com/api/books");
        const data = await response.json();

        data.forEach((book: any) => {
          if (!bookExists(book.isbn)) {
            addBook({
              id: book.isbn,
              name: book.name,
              author: book.authors.join(", "),
              released: book.released,
              publisher: book.publisher,
              country: book.country,
              mediaType: book.mediaType,
              numberOfPages: book.numberOfPages,
            });
          }
        });
      } catch (err) {
        setError("No se pudieron cargar los libros");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const bookExists = (isbn: string) => {
    return books.some((book: any) => book.id === isbn);
  };

  return { loading, error };
};

export default useBooks;
