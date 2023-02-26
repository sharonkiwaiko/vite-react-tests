import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Movies from "./examples/movies/App";
import AppUserFinder from "./AppUserFinder";

//import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<App />
     <AppUserFinder />
     */}
    <Movies />
  </React.StrictMode>
);
