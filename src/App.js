import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [book, setBook] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = book.filter((book) => book.id !== id);
    setBook(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = book.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBook(updatedBooks);
  };

  const generateSecureRandomToken = () => {
    const array = new Uint8Array(16); // Create a byte array of length 16
    window.crypto.getRandomValues(array); // Populate the array with random values
    return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
      ""
    ); // Convert it to a hexadecimal string
  };

  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...book,
      {
        id: generateSecureRandomToken(),
        title,
      },
    ];
    setBook(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList books={book} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
