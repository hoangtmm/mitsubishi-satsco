import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import { RouterProvider } from "react-router";
import router from "./routes/index.jsx";
import { HelmetProvider } from "react-helmet-async";  // 👈 thêm dòng này

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
