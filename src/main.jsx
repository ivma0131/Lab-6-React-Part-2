import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NameProvider from "./context/NameProvider.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </React.StrictMode>
);
