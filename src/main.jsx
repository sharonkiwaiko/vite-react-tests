import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShowHideUsers from "./examples/ShowHideUsers/ShowHideUsers";
import UserFinder from "./examples/ShowHideUsers/UserFinder";
//import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserFinder />
  </React.StrictMode>
);
/**
 *  <ShowHideUsers />
 *  <App />
 */
