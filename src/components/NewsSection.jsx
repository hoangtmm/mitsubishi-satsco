import React from "react";
import { Link } from "react-router-dom";
import newsData from "../assets/newsData"; // đảm bảo file export default mảng tin
import NewsCard from "./NewsCard";

const NewsSection = () => {
  if (!newsData?.length) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Tin tức</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        {/* Hàng 1: 3 card lớn */}
        <NewsCard {...newsData[0]} large />
        <NewsCard {...newsData[1]} large />
        <NewsCard {...newsData[2]} large />

        {/* Hàng 2: 2 card, card đầu chiếm 2 cột trên md+ */}
        <div className="md:col-span-2">
          <NewsCard {...newsData[3]} large />
        </div>
        <NewsCard {...newsData[4]} />
      </div>

      {/* Nút xem tất cả */}
      <div className="flex justify-center">
        <Link
          to="/tin-tuc"
          className="border-2 border-black px-8 py-2 rounded-full font-bold hover:bg-black hover:text-white transition
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label="Xem tất cả tin tức"
        >
          XEM TẤT CẢ
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
