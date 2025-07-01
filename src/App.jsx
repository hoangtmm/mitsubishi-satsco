import React from "react";
import Header from "@/layouts/Header.jsx";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router";
import QuickQuoteModal from "./components/QuickQuoteModal";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-[15px]">
      <Header />
      <main >
        <Outlet />
        <QuickQuoteModal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
