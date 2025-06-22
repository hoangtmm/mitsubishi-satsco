import React from "react";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

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
    ],
  },
]);

export default router;
