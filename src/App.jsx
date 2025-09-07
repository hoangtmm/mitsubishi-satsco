import React from "react";
import Header from "@/layouts/Header.jsx";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router";
import QuickQuoteModal from "./components/QuickQuoteModal";
import FloatingHotline from "./components/FloatingHotline";
import ScrollToTop from "@/components/ScrollToTop";
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-[15px] overflow-x-hidden">
      <Header />
      <main >
        <ScrollToTop />
        <Outlet />
        <QuickQuoteModal />
      </main>
       <FloatingHotline />
      <Footer />
    </div>
  );
};

export default App;
