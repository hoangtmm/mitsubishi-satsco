import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex items-center justify-between px-4 py-2">
      {/* Logo + slogan */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Mitsubishi" className="h-10" />
        <div className="leading-tight text-sm">
          <div className="font-bold">VỮNG TIẾN</div>
          <div>MỖI HÀNH TRÌNH</div>
        </div>
      </div>

      {/* Menu chính */}
      <nav className="flex gap-4 text-sm font-semibold">
        <div className="relative group">
          <span className="cursor-pointer">SẢN PHẨM</span>
          <div className="absolute hidden group-hover:block bg-black text-white mt-1 p-2 shadow-lg">
            <div className="hover:bg-gray-700 p-1">Xpander</div>
            <div className="hover:bg-gray-700 p-1">Pajero Sport</div>
          </div>
        </div>
        <span className="cursor-pointer">MUA XE</span>
        <span className="cursor-pointer">DỊCH VỤ</span>
        <span className="cursor-pointer">TIN TỨC & HOẠT ĐỘNG</span>
        <span className="cursor-pointer">VỀ CHÚNG TÔI</span>
      </nav>

      {/* Link phụ + ngôn ngữ */}
      <div className="flex items-center gap-2 text-xs">
        <span className="cursor-pointer">Khuyến mãi</span>
        <span className="cursor-pointer">Bảng giá</span>
        <span className="cursor-pointer">Lịch lái thử</span>
        <span className="cursor-pointer">Đăng ký lái thử</span>
        <span className="cursor-pointer">Đặt lịch dịch vụ</span>
        <span className="cursor-pointer">Nhà phân phối</span>
        <div className="border border-white px-1">
          <button className="mr-1">VN</button>|<button className="ml-1">EN</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
