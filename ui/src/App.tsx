import React from "react";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const App = () => {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
};
