import React from "react";
import { Book as BookIcon, User } from "lucide-react";
import { BookCardProps } from "./type";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-700">
      <div className="relative">
        <div className="w-full h-56 bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
          <BookIcon className="w-16 h-16 text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-1 group-hover:text-purple-400 transition-colors duration-300">
          {book.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-400">
          <User className="w-4 h-4" />
          <p className="text-sm line-clamp-1">{book.author}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
