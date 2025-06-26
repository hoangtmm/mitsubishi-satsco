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
    <footer className="bg-black text-white px-6 md:px-10 py-10 text-sm">
      {/* Language Switcher */}
      <div className="text-right mb-4">
        <button
          onClick={() => setLang(isVN ? "EN" : "VN")}
          className="px-2 py-1 border text-xs"
        >
          {text.langSwitch}
        </button>
      </div>

      {/* Top icons (hidden on small screens) */}
      <div className="hidden md:flex justify-center gap-12 mb-10 text-center">
        <div>
          <FaCar className="text-2xl mx-auto mb-1" />
          <p>{isVN ? "BẢNG GIÁ" : "PRICE LIST"}</p>
        </div>
        <div>
          <FaRoute className="text-2xl mx-auto mb-1" />
          <p>{isVN ? "ĐĂNG KÝ LÁI THỬ" : "TEST DRIVE"}</p>
        </div>
        <div>
          <FaMapMarkerAlt className="text-2xl mx-auto mb-1" />
          <p>{isVN ? "NHÀ PHÂN PHỐI" : "DISTRIBUTORS"}</p>
        </div>
        <div>
          <FaFileAlt className="text-2xl mx-auto mb-1" />
          <p>{isVN ? "TẢI BROCHURE" : "DOWNLOAD BROCHURE"}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Each column is adjusted like previous version */}
        <div>
          <h4 className="font-bold mb-2">{text.product}</h4>
          <ul className="space-y-1">
            {["Xpander", "Attrage", "Outlander", "Pajero Sport"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">{text.buy}</h4>
          <ul className="space-y-1">
            {["Khuyến mãi", "Tìm đại lý", "Tính chi phí"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">{text.service}</h4>
          <ul className="space-y-1">
            {["Bảo hành", "Phụ tùng", "Đặt lịch"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">{text.news}</h4>
          <ul className="space-y-1">
            {["Tin công ty", "Sự kiện", "Triệu hồi"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">{text.about}</h4>
          <ul className="space-y-1">
            {["Giới thiệu", "Tuyển dụng", "Triết lý"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">📞 18001514 ({text.hotline})</p>
          <p className="mb-4">✉️ cskh@mitsubishi-motors.com.vn</p>
          <h4 className="font-bold">MITSUBISHI VIỆT NAM</h4>
          <ul className="mt-2 list-disc list-inside space-y-1 text-xs">
            <li>Đăng ký lần đầu 2008 - Cập nhật 2024</li>
            <li>Địa chỉ: Bình Dương, Việt Nam</li>
            <li>Chịu trách nhiệm: Tomoki Yanagawa</li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="mt-8 text-center flex justify-center gap-4 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
          <FaFacebookF />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
