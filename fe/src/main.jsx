// Import React and the React DOM renderer.
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main application component.
import App from "./App.jsx";

// Import the stylesheet entry point.
// This loads all the CSS files listed in index.css.
import "./index.css";

// Render the portfolio application into the HTML page.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);