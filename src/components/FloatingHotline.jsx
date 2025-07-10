// src/components/FloatingHotline.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const FloatingHotline = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      {/* Hotline */}
      <a
        href="tel:0947700923"
        className="group flex items-center relative"
        style={{ textDecoration: "none" }}
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute animate-ping-slow w-[60px] h-[60px] rounded-full bg-orange-300 opacity-60"></span>
          <span className="w-[48px] h-[48px] bg-gradient-to-br from-[#ffbb33] to-[#ff8c1a] rounded-full flex items-center justify-center border-2 border-white shadow-lg z-10">
            <FaPhoneAlt className="text-white text-2xl" />
          </span>
        </span>
        <span className="ml-[-12px] pl-6 pr-6 py-2 bg-gradient-to-br from-[#e83c18] to-[#ff6a29] rounded-r-full rounded-l-[24px] text-white text-lg font-bold shadow-lg transition-transform group-hover:scale-105 duration-200 border-l-0 border-2 border-white">
          094 7700 923
        </span>
      </a>
      {/* Zalo */}
      <a
        href="https://zalo.me/0947700923"
        className="group flex items-center relative"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute animate-ping-slow w-[60px] h-[60px] rounded-full bg-blue-200 opacity-60"></span>
          <span className="w-[48px] h-[48px] bg-gradient-to-br from-[#0086ff] to-[#0055b8] rounded-full flex items-center justify-center border-2 border-white shadow-lg z-10">
            <SiZalo className="text-white text-2xl" />
          </span>
        </span>
        <span className="ml-[-12px] pl-6 pr-6 py-2 bg-gradient-to-br from-[#0086ff] to-[#0055b8] rounded-r-full rounded-l-[24px] text-white text-lg font-bold shadow-lg transition-transform group-hover:scale-105 duration-200 border-l-0 border-2 border-white">
          Chat Zalo
        </span>
      </a>
      <style>
        {`
          .animate-ping-slow {
            animation: ping-slow 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 0.7; }
            80%, 100% { transform: scale(1.4); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingHotline;
