import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import setupLocatorUI from "@locator/runtime";
import Preloader from "./components/PreLoader/PreLoader.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

function Root() {
  const [loading, setLoading] = useState(true);
  // const [isFirstLoad, setIsFirstLoad] = useState(false);
  // const location = useLocation();

  // if (location.pathname === "/" && !isFirstLoad) {
  //   setIsFirstLoad(true);
  //   setLoading(true);
  // }else{
  //   setIsFirstLoad(false);
  //   setLoading
  // }

  return (
    <div>
      {/* {loading && isFirstLoad && <Preloader onComplete={() => setLoading(false)} />} */}

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
