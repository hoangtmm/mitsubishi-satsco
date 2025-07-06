import newsData from "../assets/newsData";
import NewsCard from "./NewsCard";

const NewsSection = () => (
  <section className="max-w-[1400px] mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4">Tin tức</h2>
    <div className="grid grid-cols-3 gap-6 mb-6">
      {/* Hàng 1: 3 card lớn */}
      <NewsCard {...newsData[0]} large />
      <NewsCard {...newsData[1]} large />
      <NewsCard {...newsData[2]} large />
      {/* Hàng 2: 2 card, card đầu chiếm 2 cột */}
      <div className="col-span-2">
        <NewsCard {...newsData[3]} large />
      </div>
      <NewsCard {...newsData[4]} />
    </div>
    {/* Nút xem tất cả */}
    <div className="flex justify-center">
      <button className="border-2 border-black px-8 py-2 rounded-full font-bold hover:bg-black hover:text-white transition">
        XEM TẤT CẢ
      </button>
    </div>
  </section>
);

export default NewsSection;
