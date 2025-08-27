import React from "react";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import InstallmentPage from "@/pages/InstallmentPage";
import CarDetailPage from "@/pages/CarDetailPage";
import About from "@/pages/About";
import PriceList from "@/pages/PriceList";
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
        element: <InstallmentPage />,
      },
      { path: "/:slug", element: <CarDetailPage /> },
      { path: "gioi-thieu", element: <About /> },
      { path: "bang-gia-xe", element: <PriceList /> },
    ],
  },
]);

export default router;
