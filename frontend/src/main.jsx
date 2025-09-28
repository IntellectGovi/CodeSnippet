import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import setupLocatorUI from "@locator/runtime";
import Preloader from "./components/PreLoader/PreLoader.jsx";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import FullScreenLoader from "./Utils/Loader/Loader.jsx";
if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

function Root() {
  const loading = useSelector((state) => state.loading);

  return (
    <div>
      {loading && <FullScreenLoader />}
      <App />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <Root />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
