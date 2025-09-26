import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import setupLocatorUI from "@locator/runtime";
import Preloader from "./components/PreLoader/PreLoader.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}



function Root() {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad , setIsFirstLoad] = useState(false);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <StrictMode>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
          <App />
        </StrictMode>
      </Provider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
