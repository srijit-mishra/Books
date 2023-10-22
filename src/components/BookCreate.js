import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");

  const { handleCreateBook } = useBooksContext();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <button className="button" type="submit">
            Create Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookCreate;
