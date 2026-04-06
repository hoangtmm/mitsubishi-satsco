import React, { useState } from "react";
import {
  FaCar,
  FaRoute,
  FaMapMarkerAlt,
  FaFileAlt,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [lang, setLang] = useState("VN");

  const isVN = lang === "VN";

  const text = {
    product: isVN ? "Sản phẩm" : "Products",
    buy: isVN ? "Mua xe" : "Buy a car",
    service: isVN ? "Dịch vụ" : "Services",
    news: isVN ? "Tin tức & Hoạt động" : "News & Activities",
    about: isVN ? "Về chúng tôi" : "About us",
    contact: isVN ? "Liên hệ" : "Contact",
    hotline: isVN
      ? "Tổng đài CSKH"
      : "Customer Service Hotline",
    langSwitch: isVN ? "EN" : "VN",
  };

  return (
    <footer className="bg-black text-white">
      {/* Language Switcher */}
      <div className="px-5 pt-6 pb-3 md:px-10 md:pt-8">
        <div className="text-right">
          <button
            onClick={() => setLang(isVN ? "EN" : "VN")}
            className="px-4 py-1.5 border border-white/60 hover:border-white text-xs font-semibold transition-colors rounded"
          >
            {text.langSwitch}
          </button>
        </div>
      </div>

      {/* Top icons (hidden on small screens) */}
      <div className="hidden md:flex justify-center gap-12 mb-10 text-center px-10">
        <div>
          <FaCar className="text-2xl mx-auto mb-1" />
          <p className="text-sm">{isVN ? "BẢNG GIÁ" : "PRICE LIST"}</p>
        </div>
        <div>
          <FaRoute className="text-2xl mx-auto mb-1" />
          <p className="text-sm">{isVN ? "ĐĂNG KÝ LÁI THỬ" : "TEST DRIVE"}</p>
        </div>
        <div>
          <FaMapMarkerAlt className="text-2xl mx-auto mb-1" />
          <p className="text-sm">{isVN ? "NHÀ PHÂN PHỐI" : "DISTRIBUTORS"}</p>
        </div>
        <div>
          <FaFileAlt className="text-2xl mx-auto mb-1" />
          <p className="text-sm">{isVN ? "TẢI BROCHURE" : "DOWNLOAD BROCHURE"}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="px-5 md:px-10 pb-6 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-8">
          {/* Each column */}
          <div className="pb-1">
            <h4 className="font-bold mb-2.5 text-[15px] tracking-wide">{text.product}</h4>
            <ul className="space-y-1.5">
              {["Xpander", "Attrage", "Outlander", "Pajero Sport"].map((item) => (
                <li key={item} className="text-[13px] hover:underline cursor-pointer hover:text-gray-300 transition-colors leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div className="pb-1">
            <h4 className="font-bold mb-2.5 text-[15px] tracking-wide">{text.buy}</h4>
            <ul className="space-y-1.5">
              {["Khuyến mãi", "Tìm đại lý", "Tính chi phí"].map((item) => (
                <li key={item} className="text-[13px] hover:underline cursor-pointer hover:text-gray-300 transition-colors leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div className="pb-1">
            <h4 className="font-bold mb-2.5 text-[15px] tracking-wide">{text.service}</h4>
            <ul className="space-y-1.5">
              {["Bảo hành", "Phụ tùng", "Đặt lịch"].map((item) => (
                <li key={item} className="text-[13px] hover:underline cursor-pointer hover:text-gray-300 transition-colors leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div className="pb-1">
            <h4 className="font-bold mb-2.5 text-[15px] tracking-wide">{text.news}</h4>
            <ul className="space-y-1.5">
              {["Tin công ty", "Sự kiện", "Triệu hồi"].map((item) => (
                <li key={item} className="text-[13px] hover:underline cursor-pointer hover:text-gray-300 transition-colors leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div className="pb-1">
            <h4 className="font-bold mb-2.5 text-[15px] tracking-wide">{text.about}</h4>
            <ul className="space-y-1.5">
              {["Giới thiệu", "Tuyển dụng", "Triết lý"].map((item) => (
                <li key={item} className="text-[13px] hover:underline cursor-pointer hover:text-gray-300 transition-colors leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div className="pb-1">
            <p className="font-bold mb-1.5 text-[13px] leading-relaxed">📞 18001514</p>
            <p className="text-[11px] opacity-75 mb-1">({text.hotline})</p>
            <p className="mb-3 text-[13px] leading-relaxed">✉️ cskh@mitsubishi-motors.com.vn</p>
            <h4 className="font-bold text-[15px] tracking-wide mb-2">MITSUBISHI VIỆT NAM</h4>
            <ul className="space-y-1 text-[11px] opacity-70 leading-relaxed">
              <li>Đăng ký lần đầu 2008 - Cập nhật 2024</li>
              <li>Địa chỉ: Bình Dương, Việt Nam</li>
              <li>Chịu trách nhiệm: Tomoki Yanagawa</li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-white/10 text-center flex justify-center gap-8">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-2xl hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-2xl hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        <p className="mt-5 text-center text-xs text-white/70">
          designed by{" "}
          <a
            href="https://hoangdev.online/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white transition-colors"
          >
            hoang.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
