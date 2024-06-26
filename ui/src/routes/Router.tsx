import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/Dashboard";
import styled from "styled-components";
import RegisterBatchPage from "../pages/RegisterBatchPage";
import FindNewBatch from "../pages/FindNewBatch";
import MyBatches from "../pages/MyBatches";
import VerifyDiscountPage from "../pages/VerifyDiscountPage";
import AboutPage from "../pages/AboutPage";
const Router = () => {
  const routes = createBrowserRouter([
    { path: "register", element: <RegisterPage /> },
    { path: "login", element: <LoginPage /> },
    { path: "dashboard", element: <DashboardPage /> },
    { path: "disponibilizar", element: <RegisterBatchPage /> },
    { path: "procurar", element: <FindNewBatch /> },
    { path: "meus-espacos", element: <MyBatches /> },
    { path: "verificar-desconto", element: <VerifyDiscountPage /> },
    { path: "sobre", element: <AboutPage /> },
    { path: "*", element: <Navigate to="/dashboard" /> },
  ]);
  return <RouterProvider router={routes} />;
};

export default styled(Router)``;
