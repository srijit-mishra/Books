import React, { useEffect, useState } from "react";
import searchImages from "../api/api"; // import your searchImages function
import blank from "../assets/blank.png";
import placeholderImage from "../assets/placeholder.png"; // import the placeholder image
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";
import Loading from "./Loading";

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);
  const [image, setImage] = useState(null); // state for storing the image
  const [loading, setLoading] = useState(true); // state for loading condition

  const handleSubmit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    if (!book.title || book.title.trim() === "") {
      setImage({
        urls: { raw: blank },
        alt_description: "No title provided",
      });
      setLoading(false);
      return;
    }
    searchImages(book.title)
      .then((images) => {
        if (images && images.length > 0) {
          setImage(images[0]); // set the first image from the response
        } else {
          setImage({
            urls: { raw: placeholderImage },
            alt_description: "No image available",
          });
        }
        setLoading(false); // set loading to false after getting the response
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setImage({
          urls: { raw: placeholderImage },
          alt_description: "No image available",
        });
        setLoading(false); // in case of error, also stop loading
      });
  }, [book.title]); // dependency array with 'book.title' to avoid unnecessary API calls

  if (loading) {
    return <Loading />; // show loading component while waiting for the response
  }

  if (showEdit) {
    return <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      {image && (
        <div className="book-image">
          <img
            src={image.urls.raw}
            alt={image.alt_description}
            style={{
              width: "800px", // specify the width
              height: "320px", // specify the height
              objectFit: "cover", // this CSS rule ensures the image covers the frame without distortion
            }}
          />{" "}
        </div>
      )}

      <h3>{book.title}</h3>
      <div className="actions">
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default BookShow;
