import serviceData from "../assets/serviceData";
import ServiceCard from "./ServiceCard";

const WhyChooseSection = () => (
  <section
    className="relative w-full py-16 bg-cover bg-center"
    style={{
      backgroundImage: 'url("/images/bg-car.jpg")',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative max-w-[1400px] mx-auto z-10 px-4">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold inline-block align-middle">
          <span className="inline-block mr-3 align-middle text-[28px]">❤️</span>
          TẠI SAO BẠN NÊN CHỌN XE MITSUBISHI
        </h2>
        <div className="w-28 h-1 bg-red-600 mx-auto mt-2 rounded"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {serviceData.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
