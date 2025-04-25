import React from "react";
import { Plus } from "lucide-react";
import BookForm from "../components/BookForm";

const AddBook: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Plus className="w-8 h-8 text-purple-500" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ">
            Detalle del libro
          </h1>
        </div>
      </div>
      <BookForm />
    </div>
  );
};

export default AddBook;
