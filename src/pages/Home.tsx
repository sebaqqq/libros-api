import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Library, Search, Heart, PlusCircle, Filter } from "lucide-react";
import useBooks from "../hooks/useBook";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SeachBar";
import { useBookContext } from "../context/BookContext";
import { FilterOptions } from "./type";

const Home: React.FC = () => {
  const { books } = useBookContext();
  const { loading, error } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    publisher: "",
    mediaType: "",
    country: "",
    pagesMin: "",
    pagesMax: "",
    year: "",
    sortOrder: "asc",
  });

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = (term: string) => {
    applyFilters(term);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [name]: value };
      return updatedFilters;
    });
  };

  const applyFilters = useCallback(
    (searchTerm: string = "") => {
      let filtered = [...books];

      if (searchTerm) {
        filtered = filtered.filter(
          (book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.country.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (filters.publisher) {
        filtered = filtered.filter((book) =>
          book.publisher.toLowerCase().includes(filters.publisher.toLowerCase())
        );
      }

      filtered = [...filtered].sort((a, b) =>
        filters.sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );

      const uniqueBooks = filtered.filter(
        (book, index, self) =>
          index === self.findIndex((b) => b.name === book.name)
      );

      setFilteredBooks(uniqueBooks);
    },
    [books, filters]
  );

  useEffect(() => {
    applyFilters();
  }, [filters, books, applyFilters]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div
          role="status"
          className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 flex items-center gap-2">
          <span className="text-lg sm:text-xl md:text-2xl">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Library className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Biblioteca Digital
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-between">
            <Link
              to="/favorites"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-purple-400 rounded-lg transition-colors duration-200 w-full sm:w-auto"
            >
              <Heart className="w-5 h-5" />
              <span>Favoritos</span>
            </Link>
            <Link
              to="/add-book"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 w-full sm:w-auto text-right"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Añadir Libro</span>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <Filter className="w-5 h-5" />
            <span>{showFilters ? "Ocultar filtros" : "Mostrar filtros"}</span>
          </button>

          {showFilters && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Editorial
                </label>
                <input
                  type="text"
                  name="publisher"
                  value={filters.publisher}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Filtrar por editorial"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Ordenar por nombre
                </label>
                <select
                  name="sortOrder"
                  value={filters.sortOrder}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="asc">Ascendente</option>
                  <option value="desc">Descendente</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <Link
                key={`${book.id}-${index}`}
                to={`/book/${book.id}`}
                className="transform transition-transform hover:scale-105"
              >
                <BookCard book={book} onClick={() => {}} />
              </Link>
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No se encontraron libros</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
