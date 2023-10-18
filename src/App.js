import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBook] = useState([]);

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
    <div>
      {book.map((book) => (
        <div key={book.id}>
          {book.title}
          {book.id}
        </div>
      ))}
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
