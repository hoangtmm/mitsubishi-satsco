import React from "react";

const models = [
  { name: "All-New Triton", price: "655.000.000 VNĐ" },
  { name: "Xforce", price: "599.000.000 VNĐ" },
  { name: "Xpander", price: "560.000.000 VNĐ" },
  { name: "Xpander Cross", price: "698.000.000 VNĐ" },
  { name: "Outlander", price: "825.000.000 VNĐ" },
  { name: "Pajero Sport", price: "1.130.000.000 VNĐ" },
  { name: "Attrage", price: "380.000.000 VNĐ" },
];

const sections = [
  { title: "DST CONCEPT", subtitle: "", bg: "/images/dst.jpg" },
  { title: "RA MẮT DST CONCEPT", subtitle: "", bg: "/images/launch.jpg" },
  { title: "CHIẾM LĨNH MỌI LÃNH ĐỊA", subtitle: "", bg: "/images/territory.jpg" },
  { title: "ĐỒNG HÀNH CÙNG 100.000 GIA ĐÌNH VIỆT", subtitle: "", bg: "/images/family.jpg" },
  { title: "ƯU ĐÃI MUA XE MỚI", subtitle: "", bg: "/images/promo.jpg" },
];

const Home = () => (
  <main className="mt-[70px]">
    {/* Hero Carousel */}
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
      {/* Thay thế bằng slider nếu cần */}
      <img src="/images/hero1.jpg" className="w-full h-full object-cover" alt="" />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6 md:p-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold">VƯƠN TẦM, NHÂN GIÁ TRỊ</h1>
        <button className="mt-4 px-6 py-2 bg-red-600 text-white">Tìm hiểu thêm</button>
      </div>
    </div>

    {/* Multi Sections */}
    <div className="mt-10 space-y-10">
      {sections.map((sec, i) => (
        <div
          key={i}
          className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${sec.bg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative text-center text-white px-4">
            <h2 className="text-2xl font-bold mb-2">{sec.title}</h2>
            {sec.subtitle && <p>{sec.subtitle}</p>}
            <button className="mt-3 px-4 py-2 border border-white">More Information</button>
          </div>
        </div>
      ))}
    </div>

    {/* Bảng giá mẫu xe */}
    <div className="mt-10 px-4 md:px-20">
      <h2 className="text-xl font-semibold mb-4">Current Special Offers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {models.map((m) => (
          <div key={m.name} className="bg-gray-100 p-4 text-center rounded hover:shadow-lg">
            <p className="font-semibold">{m.name}</p>
            <p className="text-red-600">{m.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Chọn mẫu xe */}
    <div className="mt-16 px-4 md:px-20">
      <h2 className="text-xl font-semibold mb-4">Choose model</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {models.map((m) => (
          <div key={m.name} className="relative h-[180px] bg-gray-200 rounded overflow-hidden">
            <img src={`/images/${m.name.toLowerCase().replace(/ /g, "-")}.jpg`} alt={m.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 bg-black bg-opacity-40 w-full p-2 text-white text-center">
              {m.name}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section đăng ký lái thử */}
    <div className="mt-20 bg-red-600 text-white py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Trải nghiệm Xpander ngay hôm nay!</h2>
      <p>Vui lòng để lại thông tin, chúng tôi sẽ liên hệ ngay với bạn</p>
      <button className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded">Đăng ký ngay</button>
    </div>
  </main>
);

export default Home;
