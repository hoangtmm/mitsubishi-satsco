import React from "react";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import InstallmentPage from "@/pages/InstallmentPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
        {
        path: "/thu-tuc-tra-gop",
        element: <InstallmentPage  />,
      },
    ],
  },
]);

export default router;
