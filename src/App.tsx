import "./css/index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetailsPage from "./pages/BookDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import { BookProvider } from "./context/BookContext";

const App: React.FC = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};
export default App;
