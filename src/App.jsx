import React from "react";
import Header from "@/layouts/Header.jsx";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router";
const App = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="mt-2">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
