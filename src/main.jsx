import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HeoresApp } from "./HeoresApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeoresApp />
    </BrowserRouter>
  </React.StrictMode>
);
