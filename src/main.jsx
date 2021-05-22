import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={3000} limit={1} />
  </React.StrictMode>,
  document.getElementById("root")
);
