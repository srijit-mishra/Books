import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
