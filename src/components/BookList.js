import React from "react";
import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
  const { book, deleteBookById, editBookById } = useBooksContext();

  const renderedBooks = book.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        deleteBookById={deleteBookById}
        editBookById={editBookById}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
