import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./axios/axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

