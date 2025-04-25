import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Book, User, BookText, Calendar, CheckCircle } from "lucide-react";
import { useBookContext } from "../context/BookContext";

const BookForm: React.FC = () => {
  const { addBook } = useBookContext();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Book className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-gray-100">
          Agregar nuevo libro
        </h2>
      </div>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-700 text-white rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>{successMessage}</span>
        </div>
      )}

      <Formik
        initialValues={{
          name: "",
          author: "",
          released: "",
          publisher: "",
          country: "",
          mediaType: "",
          numberOfPages: 0,
        }}
        onSubmit={(values, { resetForm }) => {
          const newBook = {
            id: new Date().toISOString(),
            ...values,
          };

          addBook(newBook);
          console.log(newBook);

          setSuccessMessage("¡Libro agregado correctamente!");

          resetForm();

          setTimeout(() => setSuccessMessage(null), 3000);
        }}
      >
        <Form className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookText className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="text"
              name="name"
              placeholder="Título"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="text"
              name="author"
              placeholder="Autor"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="date"
              name="released"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookText className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="text"
              name="publisher"
              placeholder="Editorial"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookText className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="text"
              name="country"
              placeholder="País"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookText className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="text"
              name="mediaType"
              placeholder="Tipo de medio"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookText className="h-5 w-5 text-gray-400" />
            </div>
            <Field
              type="number"
              name="numberOfPages"
              placeholder="Número de páginas"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            <Book className="w-5 h-5" />
            Agregar libro
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
