import SimpleCarousel from "../components/SimpleCarousel";
import carData from "../assets/carData1";
import CarCard from "../components/CarCard";
import SupportBanner from "../components/SupportBanner";
import WhyChooseSection from "../components/WhyChooseSection";
import NewsSection from "../components/NewsSection";
import DealerInfoSection from "../components/DealerInfoSection";
import { Helmet } from "react-helmet-async";
const Home = () => (
  <main className="pt-[80px] bg-gray-50 min-h-screen">
    {/* SEO Head */}
    <Helmet>
      <title>Mitsubishi Tân Bình | Báo giá & Khuyến mãi xe Mitsubishi 2025</title>
      <meta
        name="description"
        content="Mitsubishi Tân Bình – Đại lý Mitsubishi chính hãng tại TP.HCM. Cập nhật giá xe mới nhất, khuyến mãi, hỗ trợ trả góp. Liên hệ ngay để nhận báo giá chi tiết."
      />
    </Helmet>
    {/* Carousel */}
    <SimpleCarousel />

    {/* Section danh sách xe */}
    <section className="w-full max-w-[1700px] mx-auto py-12 px-2">
      <div className="text-center my-2">
          {/* H1 chính cho trang Home */}
    <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-red-700 mt-4">
      Mitsubishi Tân Bình – Báo giá & Khuyến mãi xe Mitsubishi 2025
    </h1>
        <div className="font-bold text-xl sm:text-2xl uppercase text-[#141d2f]">
          DÒNG XE KINH DOANH TẠI
        </div>
        <div className="font-extrabold text-2xl sm:text-3xl uppercase text-red-700 mt-0 inline-block relative">
          MITSUBISHI TÂN BÌNH
          <span className="block h-[3px] w-20 bg-red-700 mx-auto mt-1 rounded absolute left-1/2 -translate-x-1/2"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-12">
        {carData.map((car, idx) => (
          <CarCard key={idx} {...car} />
        ))}
      </div>
    </section>

    {/* Banner hỗ trợ */}
    <section className="bg-black w-full py-8 mb-8">
      <SupportBanner />
    </section>

    {/* Các section khác */}
    <WhyChooseSection />
    <NewsSection />
    <DealerInfoSection />
  </main>
);

export default Home;
