import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import setupLocatorUI from "@locator/runtime";
import Preloader from "./components/PreLoader/PreLoader.jsx";
import { Provider } from "react-redux";
import configureStore from "@reduxjs/toolkit";
if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

function Root() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <StrictMode>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        <App />
      </StrictMode>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Root />);

