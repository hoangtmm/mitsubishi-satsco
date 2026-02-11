import SimpleCarousel from "../components/SimpleCarousel";
import carData from "../assets/carData1";
import CarCard from "../components/CarCard";
import SupportBanner from "../components/SupportBanner";
import WhyChooseSection from "../components/WhyChooseSection";
import NewsSection from "../components/NewsSection";
import DealerInfoSection from "../components/DealerInfoSection";
const Home = () => (
  <main className="pt-[60px] md:pt-[80px] bg-gray-50 min-h-screen">
    <SimpleCarousel />
    <section className="w-full max-w-[1700px] mx-auto py-8 md:py-12 px-4 md:px-2">
      <div className="text-center my-2">
        <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase text-[#141d2f]">
          DÒNG XE KINH DOANH TẠI
        </div>
        <div className="font-extrabold text-xl md:text-2xl lg:text-3xl uppercase text-red-700 mt-0 inline-block relative">
          MITSUBISHI TÂN BÌNH
          <span className="block h-[3px] w-16 md:w-20 bg-red-700 mx-auto mt-1 rounded absolute left-1/2 -translate-x-1/2"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-14 gap-y-8 md:gap-y-12">{carData.map((car, idx) => (
          <CarCard key={idx} {...car} />
        ))}
      </div>
    </section>
    <section className="bg-black w-full py-8 mb-8">
      <SupportBanner />
    </section>
    <WhyChooseSection />
    <NewsSection />
    <DealerInfoSection />
  </main>
);

export default Home;
