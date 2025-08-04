import { useParams } from "react-router-dom";
import carData from "../assets/carData1";

export default function CarDetailPage() {
  const { slug } = useParams();
  const car = carData.find(x => x.slug === slug);
  if (!car) return <div className="p-10 text-center text-2xl text-red-500">Không tìm thấy xe</div>;

  return (
    <main className="bg-[#fafbfc] min-h-screen font-sans pt-20">
      {/* Banner + Price box */}
      <section className="container mx-auto py-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 bg-white rounded-lg shadow p-2 flex items-center justify-center">
          <img src={car.banner} alt={car.name} className="max-w-full h-56 object-contain" />
        </div>
        <div className="md:w-1/3 bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <h2 className="text-lg font-bold mb-2 text-center">KHUYẾN MÃI MITSUBISHI XFORCE</h2>
          <ul className="text-gray-700 text-base mb-4 list-disc list-inside">
            <li>{car.promo}</li>
          </ul>
          <div className="text-xl font-bold text-red-600 text-center mb-3">Giá: {car.price}</div>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-bold mx-auto block">Đăng ký lái thử/Xem giá ưu đãi</button>
        </div>
      </section>

      {/* Bảng giá và tính trả góp */}
      <section className="container mx-auto my-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white rounded shadow p-4 flex-1">
            <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-2 text-base uppercase text-red-700">Giá xe Mitsubishi Xforce</h3>
            <ul>
              {car.priceBox?.map((v, i) => (
                <li key={i}>{v.version}: <b>{v.price} VNĐ</b></li>
              ))}
            </ul>
            {/* Chọn tỉnh/thành, phiên bản... Nếu muốn, có thể làm component riêng */}
          </div>
          <div className="bg-white rounded shadow p-4 flex-1">
            <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-2 text-base uppercase text-red-700">Tính lãi trả góp</h3>
            <div> {/* Chỉ là demo, có thể gắn form tính lãi ở đây */} 
              <ul>
                {car.installments?.map((row, i) => (
                  <li key={i}>Trả trước: {row.prepay} - Kỳ hạn: {row.months} tháng - Lãi: {row.rate} - Mỗi tháng: <b>{row.monthly}</b></li>
                ))}
              </ul>
              <button className="mt-2 border px-4 py-1 rounded bg-blue-600 text-white">Đăng ký nhận tư vấn trả góp</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tổng quan, phiên bản */}
      <section className="container mx-auto my-4 bg-white rounded shadow p-4">
        <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-3 text-base uppercase text-red-700">{car.overview.title}</h3>
        <img src={car.overview.image} alt="" className="w-full max-w-2xl mx-auto mb-2" />
        <p className="text-gray-800 whitespace-pre-line">{car.overview.content}</p>
        <div className="mt-3 font-bold">Các phiên bản: {car.versions?.join(", ")}</div>
      </section>

      {/* Trang thiết bị */}
      {car.equipment?.map((eq, i) => (
        <section key={i} className="container mx-auto my-4 bg-white rounded shadow p-4">
          <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-3 text-base uppercase text-red-700">{eq.title}</h3>
          <img src={eq.image} alt="" className="w-full max-w-xl mx-auto mb-2" />
          <p className="text-gray-800 whitespace-pre-line">{eq.content}</p>
        </section>
      ))}

      {/* Các section chi tiết */}
      {car.sections.map((sec, i) => (
        <section key={i} className="container mx-auto my-4 bg-white rounded shadow p-4">
          <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-3 text-base uppercase text-red-700">{sec.title}</h3>
          {sec.blocks.map((block, j) => (
            <div key={j} className="mb-5">
              {block.subtitle && <div className="font-semibold mb-1">{block.subtitle}</div>}
              <img src={block.image} alt="" className="w-full max-w-2xl mx-auto mb-2 rounded" />
              <p className="text-gray-800">{block.desc}</p>
            </div>
          ))}
        </section>
      ))}

      {/* Bảng thông số kỹ thuật dạng ảnh */}
      {car.specsImage && (
        <section className="container mx-auto my-4 bg-white rounded shadow p-4">
          <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-3 text-base uppercase text-red-700">Thông số kỹ thuật Mitsubishi Xforce</h3>
          <img src={car.specsImage} alt="Thông số kỹ thuật" className="w-full max-w-2xl mx-auto" />
        </section>
      )}

      {/* Bộ sưu tập hình ảnh cuối */}
      {car.gallery && (
        <section className="container mx-auto my-4 bg-white rounded shadow p-4">
          <h3 className="font-bold border-l-4 border-red-500 pl-2 mb-3 text-base uppercase text-red-700">Hình ảnh Mitsubishi Xforce</h3>
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
