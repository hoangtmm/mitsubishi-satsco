import React, { useEffect, useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white px-4 transition-all duration-300 ${
        atTop ? "py-3" : "py-1 shadow-lg"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="hidden md:flex items-center gap-2 transition-all duration-300">
          <img
            src="/images/logo.jpg"
            alt="Mitsubishi-Logo"
            className="cursor-pointer transition-transform duration-300 transform h-18"
            style={{ transformOrigin: "left center" }}
            onClick={() => window.location.href = "/"}
          />
        </div>
        {/* Main menu */}
        <nav className="hidden md:flex font-bold text-sm header-ipad-menu">
          <span
            onClick={() => window.location.href = "/"}
            className="cursor-pointer px-5 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            TRANG CHỦ
          </span>
          <div className="relative group">
            <span className="cursor-pointer px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all inline-block">CÁC DÒNG XE</span>
            <div className="absolute hidden group-hover:block bg-black text-white mt-1 p-2 shadow-lg whitespace-nowrap z-50">
              <div className="hover:bg-gray-700 px-4 py-1 rounded">Xpander</div>
              <div className="hover:bg-gray-700 px-4 py-1 rounded">Pajero Sport</div>
              <div className="hover:bg-gray-700 px-4 py-1 rounded">Attrage</div>
            </div>
          </div>
          <a href="#" className="px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all">BẢNG GIÁ XE</a>
          <div className="relative group inline-block">
            <span className="cursor-pointer px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all inline-flex items-center gap-1">
              XE MITSUBISHI <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {/* Dropdown content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-black mt-2 shadow-lg p-4 z-50 w-[1000px] flex-wrap justify-start flex">
              {[
                {
                  name: "Mitsubishi Xforce",
                  price: "599.000.000 VNĐ",
                  image: "/images/Mitsubishi_Xforce.jpg",
                },
                {
                  name: "Xpander Cross 2025",
                  price: "698.000.000 VNĐ",
                  image: "/images/Xpander_Cross_2025.jpg",
                },
                {
                  name: "Mitsubishi Attrage",
                  price: "380.000.000 VNĐ",
                  image: "/images/Mitsubishi_Attrage.jpg",
                },
                {
                  name: "Mitsubishi Xpander 2025",
                  price: "560.000.000 VNĐ",
                  image: "/images/Mitsubishi_Xpander_2025.jpg",
                },
                {
                  name: "Mitsubishi Triton",
                  price: "650.000.000 VNĐ",
                  image: "/images/Mitsubishi_Triton.jpg",
                },
                {
                  name: "Mitsubishi Outlander",
                  price: "825.000.000 VNĐ",
                  image: "/images/Mitsubishi_Outlander.jpg",
                },
                {
                  name: "Mitsubishi Pajero Sport",
                  price: "650.000.000 VNĐ",
                  image: "/images/Mitsubishi_Pajero_Sport.jpg",
                },
              ].map((car, index) => (
                <div
                  key={index}
                  className="w-[180px] p-2 hover:scale-105 transition duration-300"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="rounded w-full h-auto object-cover"
                  />
                  <p className="font-bold mt-2 text-sm">{car.name}</p>
                  <p className="text-red-600 text-xs">Giá: từ {car.price}</p>
                </div>
              ))}
            </div>
          </div>
          <a href="#" className="px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all">KHUYẾN MÃI</a>
          <a href="/thu-tuc-tra-gop" className="px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all">THỦ TỤC TRẢ GÓP</a>
          <a
            href="#"
            className="px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all header-tintuc"
          >
            TIN TỨC
          </a>
        </nav>
        {/* Hotline */}
        <div className="hidden md:flex items-center">
          <div className="animate-pulse bg-yellow-400 text-red-600 font-bold px-4 py-2 rounded-full border border-yellow-500 text-xs text-center leading-tight shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-[13px] font-semibold">Tư vấn (miễn phí)</div>
            <div className="text-lg text-red-700 font-extrabold tracking-wide">094 7700 923</div>
          </div>
        </div>
        {/* Mobile giữ nguyên không chỉnh */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            className="bg-red-600 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <img
            src="/images/logo.jpg"
            alt="Mitsubishi-Logo"
            className={`transition-transform duration-300 transform ${atTop ? "scale-125" : "scale-100"} h-12`}
            style={{ transformOrigin: "center center" }}
          />
          <FaSearch className="text-white text-xl" />
        </div>
      </div>
      {/* Mobile dropdown menu giữ nguyên */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white fixed top-[60px] left-0 right-0 z-40">
          <div className="border-t border-white/10">
            <a href="#" className="block px-4 py-3 border-b border-white/10 font-bold">TRANG CHỦ</a>
            <div>
              <button
                className="w-full text-left px-4 py-3 border-b border-white/10 font-bold flex justify-between items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                CÁC DÒNG XE
                <span>{showDropdown ? "▲" : "▶"}</span>
              </button>
              {showDropdown && (
                <div className="bg-black text-sm pl-6">
                  <div className="py-2 border-b border-white/10">Xpander</div>
                  <div className="py-2 border-b border-white/10">Pajero Sport</div>
                  <div className="py-2 border-b border-white/10">Attrage</div>
                </div>
              )}
            </div>
            <a href="#" className="block px-4 py-3 border-b border-white/10 font-bold">BẢNG GIÁ XE</a>
            <a href="#" className="block px-4 py-3 border-b border-white/10 font-bold">KHUYẾN MÃI</a>
            <a href="#" className="block px-4 py-3 border-b border-white/10 font-bold">DỊCH VỤ</a>
            <a href="#" className="block px-4 py-3 border-b border-white/10 font-bold">TIN TỨC</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
