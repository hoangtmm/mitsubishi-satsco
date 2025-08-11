import { useParams } from "react-router-dom";
import carData from "../assets/carData1";
export default function CarDetailPage() {
  const { slug } = useParams();
  const car = carData.find(x => x.slug === slug);
  if (!car)
    return (
      <div className="p-10 text-center text-2xl text-red-500">
        Không tìm thấy xe
      </div>
    );
  return (
    <main className="bg-[#fafbfc] min-h-screen font-sans pt-20">
      {/* Banner + Price box */}
      <section className="container mx-auto py-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 bg-white rounded-lg shadow p-2 flex items-center justify-center">
          <img src={car.banner} alt={car.name} className="max-w-full h-56 object-contain" />
        </div>
        <div className="md:w-1/3 bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <h2 className="text-lg font-bold mb-2 text-center">KHUYẾN MÃI MITSUBISHI XFORCE</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {Array.isArray(car.promo)
              ? car.promo.map((item, idx) => <li key={idx}>{item}</li>)
              : <li>{car.promo}</li>}
          </ul>
          <div className="text-xl font-bold text-red-600 text-center mb-3">Giá: {car.price}</div>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-bold mx-auto block">
            Đăng ký lái thử/Xem giá ưu đãi
          </button>
        </div>
      </section>

      {/* GIÁ XE - bảng giống hình 1 */}
      {car.priceTable && (
        <div className="bg-white rounded-lg p-4 shadow mb-8">
          <div className="flex items-center mb-3">
            <div className="text-xl font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l">
              GIÁ XE MITSUBISHI XFORCE
            </div>
            <div className="flex-1 border-b-2 border-[#E51A1A] ml-2"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[480px] w-full border border-[#003d6b] text-[#003d6b]">
              <thead>
                <tr className="bg-[#003d6b] text-white">
                  <th className="py-2 px-4 text-left">Phiên Bản</th>
                  <th className="py-2 px-4 text-left">Giá Xe</th>
                </tr>
              </thead>
              <tbody>
                {car.priceTable.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#F5FAFF]" : "bg-white"}>
                    <td className="py-2 px-4">{item.version}</td>
                    <td className="py-2 px-4 font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- TỔNG QUAN MITSUBISHI XFORCE --- */}
      <section className="container mx-auto my-8 bg-white rounded shadow px-0 py-2 overflow-hidden">
        {/* Tiêu đề đỏ nền đỏ, border đỏ */}
        <div className="flex items-center mb-4">
          <span className="inline-block text-base font-bold uppercase bg-[#E51A1A] text-white px-3 py-1 rounded-tl rounded-bl tracking-wide shadow border-l-4 border-[#E51A1A]">
            TỔNG QUAN MITSUBISHI XFORCE
          </span>
          <div className="flex-1 border-b-2 border-[#E51A1A]"></div>
        </div>

        {/* Ảnh to */}
        <div className="w-full flex justify-center bg-[#101d31]">
          <img
            src={car.overview.image}
            alt="Cabin Mitsubishi Xforce"
            className="rounded mb-3 max-w-full max-h-[340px] object-contain"
            style={{ background: "#101d31" }}
          />
        </div>

        {/* Tiêu đề xanh lớn */}
        <h2 className="text-[20px] md:text-[22px] font-bold text-[#1045a7] mb-2 mt-2 px-4">
          New Mitsubishi Xforce 2025
        </h2>

        {/* Intro mô tả */}
        <div className="text-gray-800 mb-2 text-[15px] leading-7 px-4">
          Mitsubishi Xforce 2025 là mẫu SUV cỡ nhỏ thuộc dòng B-SUV tại Việt Nam. Mitsubishi Xforce được Mitsubishi Việt Nam ra mắt chính thức vào tháng 6/2024 và hiện đang là một mẫu mẫu cạnh cao cho dàn các hãng tại thị trường Việt Nam, được phân phối trực tiếp bởi Mitsubishi Tân Bình.
        </div>

        {/* Động cơ & Phiên bản */}
        <div className="mb-2 px-4">
          <div className="font-bold text-[16px] text-black mb-1">
            Động cơ & Phiên bản Mitsubishi Xforce
          </div>
          <div className="text-[15px] text-gray-800 mb-1">
            Mitsubishi Xforce được trang bị khối động cơ xăng 4 xy-lanh 1.5L MIVEC, CVT, Cầu trước, Ngôn ngữ thiết kế Dynamic Shield, 5 Chỗ, Mâm hợp kim 18-inch.
          </div>
          <ul className="list-disc ml-6 text-[15px] text-gray-800 mb-3">
            <li>Mitsubishi Xforce Ultimate</li>
            <li>Mitsubishi Xforce Premium</li>
            <li>Mitsubishi Xforce Exceed</li>
            <li>Mitsubishi Xforce GLX</li>
          </ul>
        </div>

        {/* Thông số kỹ thuật */}
        <div className="mb-4 px-4">
          <div className="font-bold text-[16px] text-black mb-2">
            Thông số kỹ thuật Mitsubishi Xforce
          </div>
          <div className="flex justify-center">
            <img
              src={car.specsImage}
              alt="Thông số kỹ thuật Mitsubishi Xforce"
              className="rounded max-w-full md:max-w-[600px] w-full"
            />
          </div>
        </div>
        {/* Trang Thiết Bị Mitsubishi Xforce */}
        <div className="mb-2 px-4">
          <div className="font-bold text-[16px] text-black mb-2">
            Trang Thiết Bị Mitsubishi Xforce
          </div>
          <div className="flex justify-center">
            <img
              src={car.equipment?.[0]?.image || "/images/xforce-accessory.jpg"}
              alt="Trang thiết bị Xforce"
              className="rounded max-w-full md:max-w-[500px] w-full"
            />
          </div>
        </div>
      </section>
{/* --- NGOẠI THẤT MITSUBISHI XFORCE, data-driven --- */}
{car.exteriorSection && (
  <section className="container mx-auto my-8 bg-white rounded shadow px-0 py-2 overflow-hidden">
    {/* Tiêu đề nền đỏ */}
    <div className="flex items-center mb-3">
      <span className="inline-block text-lg md:text-xl font-bold uppercase bg-[#E51A1A] text-white px-4 py-2 rounded-tl rounded-bl tracking-wide shadow border-l-4 border-[#E51A1A]">
        {car.exteriorSection.title}
      </span>
      <div className="flex-1 border-b-2 border-[#E51A1A]"></div>
    </div>

    {/* Duyệt các block ngoại thất */}
    {car.exteriorSection.blocks.map((block, idx) => (
      <div key={idx} className="mb-5">
        {/* Sub-title và mô tả */}
        {block.subtitle && (
          <div className="px-4 mt-3 font-bold text-base text-black">{block.subtitle}</div>
        )}
        {block.desc && (
          <div className="px-4 text-xs text-[#444] mb-3">{block.desc}</div>
        )}
        {/* Duyệt từng ảnh và caption nếu có */}
        {block.images && block.images.map((img, i) => (
          <div key={i} className="w-full p-0 mb-3">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded object-cover max-h-[420px] mx-auto"
              style={{ background: "#eee" }}
            />
            {img.caption && (
              <div className="px-4 text-xs text-[#555] mt-1">{img.caption}</div>
            )}
          </div>
        ))}
      </div>
    ))}
  </section>
)}


      {/* --- Các section đặc trưng tiếp theo --- */}
      {car.equipment?.slice(1).map((eq, i) => (
        <section key={i} className="container mx-auto my-4 bg-white rounded shadow p-4">
          <div className="flex items-center mb-3">
            <div className="font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l text-base">
              {eq.title}
            </div>
            <div className="flex-1 border-b-2 border-[#E51A1A] ml-2"></div>
          </div>
          <img src={eq.image} alt="" className="w-full max-w-xl mx-auto mb-2" />
          <p className="text-gray-800 whitespace-pre-line">{eq.content}</p>
        </section>
      ))}

      {/* Các section chi tiết */}
      {car.sections.map((sec, i) => (
        <section key={i} className="container mx-auto my-4 bg-white rounded shadow p-4">
          <div className="flex items-center mb-3">
            <div className="font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l text-base">
              {sec.title}
            </div>
            <div className="flex-1 border-b-2 border-[#E51A1A] ml-2"></div>
          </div>
          {sec.blocks.map((block, j) => (
            <div key={j} className="mb-5">
              {block.subtitle && <div className="font-semibold mb-1">{block.subtitle}</div>}
              <img src={block.image} alt="" className="w-full max-w-2xl mx-auto mb-2 rounded" />
              <p className="text-gray-800">{block.desc}</p>
            </div>
          ))}
        </section>
      ))}

      {/* Bộ sưu tập hình ảnh cuối */}
      {car.gallery && (
        <section className="container mx-auto my-4 bg-white rounded shadow p-4">
          <div className="flex items-center mb-3">
            <div className="font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l text-base">
              Hình ảnh Mitsubishi Xforce
            </div>
            <div className="flex-1 border-b-2 border-[#E51A1A] ml-2"></div>
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {car.gallery.map((img, i) => (
              <img key={i} src={img} alt="" className="w-52 h-36 object-cover rounded" />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
