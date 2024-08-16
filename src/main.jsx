import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
// import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
