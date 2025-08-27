import React from "react";
import { Link } from "react-router-dom";
import newsData from "../assets/newsData"; // export default: mảng tin
import NewsCard from "./NewsCard";

const NewsSection = () => {
  if (!Array.isArray(newsData) || newsData.length === 0) return null;

  // tách mảng để render đúng layout bạn muốn
  const firstThree = newsData.slice(0, 3); // 3 card lớn hàng 1
  const nextTwo = newsData.slice(3, 5);    // hàng 2: card 4 lớn (span 2 cột) + card 5 thường

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Tin tức</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">

        {/* Hàng 1: 3 card lớn */}
        {firstThree.map((item) => (
          <NewsCard
            key={item.slug}
            slug={item.slug}
            image={item.image}
            title={item.title}
            date={item.date}
            large
          />
        ))}

        {/* Hàng 2: card đầu chiếm 2 cột (md+), card thứ 2 bình thường */}
        {nextTwo[0] && (
          <div className="md:col-span-2">
            <NewsCard
              key={nextTwo[0].slug}
              slug={nextTwo[0].slug}
              image={nextTwo[0].image}
              title={nextTwo[0].title}
              date={nextTwo[0].date}
              large
            />
          </div>
        )}

        {nextTwo[1] && (
          <NewsCard
            key={nextTwo[1].slug}
            slug={nextTwo[1].slug}
            image={nextTwo[1].image}
            title={nextTwo[1].title}
            date={nextTwo[1].date}
          />
        )}
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
