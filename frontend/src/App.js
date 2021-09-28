import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./routers/Routers";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

function App() {
  const notify = () =>
    toast.success(JSON.parse(localStorage.getItem("message-user")).message);
  const clearMess = () => {
    localStorage.removeItem("message-user");
  };
  useEffect(() => {
    if (localStorage.getItem("message-user")) {
      notify();
      setTimeout(clearMess, 5000);
    } else {
      clearTimeout(clearMess);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Route
          path={["/", "/login", "/register", "/product/:id"]}
          exact
          component={Header}
        />
        <Routers />
        <Route
          path={["/", "/login", "/register", "/product/:id"]}
          exact
          component={Footer}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
