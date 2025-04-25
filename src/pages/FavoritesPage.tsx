import React from "react";
import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import { BookHeart } from "lucide-react";

const FavoritesPage: React.FC = () => {
  const { favorites } = useBookContext();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookHeart className="w-8 h-8 text-purple-500" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ">
            Mis libros favoritos
          </h1>
        </div>
      </div>
      {favorites.length === 0 ? (
        <p className="text-center text-2xl text-purple-400">
          No tienes libros favoritos todavía.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} onClick={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
