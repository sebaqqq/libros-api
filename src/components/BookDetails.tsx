import React from "react";
import { useBookContext } from "../context/BookContext";
import { Book } from "./type";
import { formatDate } from "../utils/formatDate";
import {
  User,
  Calendar,
  Building2,
  Globe2,
  Film,
  FileText,
  Heart,
} from "lucide-react";

const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  const { favorites, addFavorite, removeFavorite } = useBookContext();
  const isFavorite = favorites.some((fav) => fav.id === book.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-8 rounded-3xl bg-gray-800 text-gray-100 shadow-xl">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <button
            onClick={handleFavoriteClick}
            className="p-2 rounded-full bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group/fav"
            aria-label={
              isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"
            }
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isFavorite
                  ? "fill-red-500 stroke-red-500"
                  : "stroke-white group-hover/fav:stroke-red-400"
              }`}
            />
          </button>
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {book.name}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <DetailItem
            icon={<User className="w-5 h-5" />}
            label="Autor"
            value={book.author}
          />
          <DetailItem
            icon={<Calendar className="w-5 h-5" />}
            label="Publicado"
            value={formatDate(book.released)}
          />
          <DetailItem
            icon={<Building2 className="w-5 h-5" />}
            label="Editorial"
            value={book.publisher}
          />
          <DetailItem
            icon={<Globe2 className="w-5 h-5" />}
            label="País"
            value={book.country}
          />
          <DetailItem
            icon={<Film className="w-5 h-5" />}
            label="Tipo de medio"
            value={book.mediaType}
          />
          <DetailItem
            icon={<FileText className="w-5 h-5" />}
            label="Páginas"
            value={book.numberOfPages.toString()}
          />
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-xl transition-colors hover:bg-gray-600">
    <div className="text-purple-400">{icon}</div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-gray-100 font-medium">{value}</p>
    </div>
  </div>
);

export default BookDetails;
