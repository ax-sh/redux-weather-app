import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={3000} limit={1} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
