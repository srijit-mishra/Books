import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [book, setBook] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = book.filter((book) => book.id !== id);
    setBook(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = book.map((book) => {
      if (book.id === id) {
        return response.data;
      }
      return book;
    });
    setBook(updatedBooks);
  };

  // const generateSecureRandomToken = () => {
  //   const array = new Uint8Array(16); // Create a byte array of length 16
  //   window.crypto.getRandomValues(array); // Populate the array with random values
  //   return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
  //     ""
  //   ); // Convert it to a hexadecimal string
  // };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...book, response.data];
    setBook(updatedBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList books={book} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
