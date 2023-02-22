import React, { useContext } from "react";

import Login from "./Login/Login";
import Home from "./Home/Home";
import MainHeader from "./MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
//import "./WebsiteLogEnd.css"

// import { AuthContextProvider } from "./store/auth-context";

function WebsiteLogEnd() {
  const ctx = useContext(AuthContext);
  console.log("WebsiteLogEnd > ctx.isLoggedIn " + ctx.isLoggedIn);
  return (
    // <AuthContextProvider>
      <React.Fragment>
        <MainHeader />

        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
    // </AuthContextProvider>
  );
}

export default WebsiteLogEnd;
