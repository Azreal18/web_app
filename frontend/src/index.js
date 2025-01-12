import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Optional: Use this for global styles

// Create the root React DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
