import { useParams } from "react-router-dom";
import carData from "../assets/carData1";

export default function CarDetailPage() {
  const { slug } = useParams();
  const car = carData.find((x) => x.slug === slug);

  if (!car) {
    return (
      <div className="p-10 text-center text-2xl text-red-500">
        Không tìm thấy xe
      </div>
    );
  }

  // ===== Helper: render 1 section (ngoại thất / nội thất) theo cùng layout
  const renderFeatureSection = (section) => {
    if (!section) return null;

    return (
      <section className="container mx-auto my-8 bg-white rounded shadow overflow-hidden">
        {/* Header */}
        <div className="px-4 pt-3">
          <span className="inline-block text-lg md:text-xl font-extrabold uppercase bg-[#E51A1A] text-white px-4 py-2 rounded-tl rounded-bl tracking-wide shadow border-l-4 border-[#E51A1A]">
            {section.title}
          </span>
        </div>
        <div className="border-b-[3px] border-[#E51A1A] mt-2" />

        <div className="p-4 md:p-6">
          {section.blocks?.map((block, idx) => (
            <article key={idx} className="mb-8">
              {/* Sub-title */}
              {block.subtitle ? (
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  {block.subtitle}
                </h3>
              ) : null}

              {/* Mô tả thuần văn bản */}
              {block.desc && (
                <p className="text-[15px] md:text-base leading-7 text-[#333] mb-3">
                  {block.desc}
                </p>
              )}

              {/* Mô tả dùng HTML */}
              {block.html && (
                <div
                  className="text-[15px] md:text-base leading-7 text-[#333] mb-3"
                  dangerouslySetInnerHTML={{ __html: block.html }}
                />
              )}

              {/* Video YouTube */}
              {block.videoId && (
                <div className="aspect-video w-full mb-4">
                  <iframe
                    className="w-full h-full rounded"
                    src={`https://www.youtube.com/embed/${block.videoId}`}
                    title={block.videoTitle || block.subtitle || section.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}

              {/* LIST (dạng gạch đầu dòng) */}
              {Array.isArray(block.list) && block.list.length > 0 && (
                <ul className="list-disc ml-6 text-gray-700 mb-3">
                  {block.list.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              )}

              {/* TABLE (key/value) - mảng [label, value] */}
              {Array.isArray(block.table) && block.table.length > 0 && (
                <table className="w-full text-sm border border-gray-200 mb-3">
                  <tbody>
                    {block.table.map((row, i) => (
                      <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-2 font-semibold w-1/2 border-b border-gray-200">
                          {Array.isArray(row) ? row[0] : ""}
                        </td>
                        <td className="p-2 border-b border-gray-200">
                          {Array.isArray(row) ? row[1] : ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* IMAGES */}
              {Array.isArray(block.images) && block.images.length > 0 && (
                block.layout === "grid-2" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                    {block.images.map((img, i) => (
                      <figure key={i} className="flex flex-col items-center text-center">
                        <img
                          src={img.src}
                          alt={img.alt || ""}
                          className="w-full h-auto rounded shadow-sm object-cover mx-auto"
                        />
                        {img.caption && (
                          <figcaption className="text-sm md:text-base text-[#555] mt-2 italic text-center">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                ) : (
                  block.images.map((img, i) => (
                    <figure key={i} className="mb-4 flex flex-col items-center text-center">
                      <img
                        src={img.src}
                        alt={img.alt || ""}
                        className="w-full h-auto rounded shadow-sm object-cover mx-auto"
                      />
                      {img.caption && (
                        <figcaption className="text-sm md:text-base text-[#555] mt-2 italic text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))
                )
              )}

              {/* Chú thích toàn block nếu cần */}
              {block.caption && (
                <div className="text-sm md:text-base text-[#555] mt-1 italic text-center">
                  {block.caption}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    );
  };




  // ===== Fallbacks an toàn
  const bannerSrc = car.banner || car.image || "/images/placeholder.png";
  const promoList = Array.isArray(car.promo) ? car.promo : car.promo ? [car.promo] : [];
  const hasOverview = !!car.overview?.image;
  const hasSpecs = !!car.specsImage;
  const hasSections = Array.isArray(car.sections) && car.sections.length > 0;

  return (
    <main className="bg-[#fafbfc] min-h-screen font-sans pt-20">
      {/* Banner + Price box */}
      <section className="container mx-auto py-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 bg-white rounded-lg shadow p-2 flex items-center justify-center">
          <img src={bannerSrc} alt={car.name} className="max-w-full h-56 object-contain" />
        </div>
        <div className="md:w-1/3 bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <h2 className="text-lg font-bold mb-2 text-center">KHUYẾN MÃI {car.name}</h2>

          {promoList.length > 0 ? (
            <ul className="list-disc pl-6 text-gray-700">
              {promoList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          ) : (
            <div className="text-center text-gray-500">Liên hệ để biết ưu đãi</div>
          )}

          {car.price && (
            <div className="text-xl font-bold text-red-600 text-center mb-3">
              Giá: {car.price}
            </div>
          )}
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-bold mx-auto block">
            Đăng ký lái thử/Xem giá ưu đãi
          </button>
        </div>
      </section>

      {/* GIÁ XE */}
      {Array.isArray(car.priceTable) && car.priceTable.length > 0 && (
        <div className="bg-white rounded-lg p-4 shadow mb-8">
          <div className="flex items-center mb-3">
            <div className="text-xl font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l">
              GIÁ XE {car.name}
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

      {/* --- TỔNG QUAN (giống hình) --- */}
      {car.overview?.image && (
        <section className="container mx-auto my-8">
          <div className="bg-white rounded shadow overflow-hidden">
            {/* Header nền đỏ + gạch chân đỏ */}
            <div className="px-4 pt-3">
              <span className="inline-block text-lg md:text-xl font-extrabold uppercase bg-[#E51A1A] text-white px-4 py-2 rounded-tl rounded-bl tracking-wide shadow border-l-4 border-[#E51A1A]">
                TỔNG QUAN {car.name}
              </span>
            </div>
            <div className="border-b-[3px] border-[#E51A1A] mt-2" />

            <div className="p-4">
              {/* Ảnh to nền đen */}
              <div className="w-full bg-[#101d31] rounded overflow-hidden mb-4">
                <img
                  src={car.overview.image}
                  alt={`${car.name} overview`}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Tiêu đề xanh lớn */}
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1045a7] mb-2">
                New {car.name} 2025
              </h2>

              {/* Mô tả intro */}
              <p className="text-[15px] md:text-base text-gray-800 leading-7 mb-4">
                Mitsubishi Xforce 2025 là một mẫu xe SUV cỡ nhỏ thuộc dòng B‑SUV tại Việt Nam.
                Mitsubishi Xforce được Mitsubishi Việt Nam ra mắt chính thức vào tháng 6/2024 và hiện
                đang là một mẫu gầm cao cỡ nhỏ bán chạy tại thị trường Việt Nam, được phân phối trực
                tiếp bởi Mitsubishi Tân Bình.
              </p>

              {/* Động cơ & Phiên bản */}
              <h3 className="text-[18px] font-bold text-black mb-2">
                Động cơ &amp; Phiên bản Mitsubishi Xforce
              </h3>
              <p className="text-[15px] text-gray-800 mb-2">
                Mitsubishi Xforce trang bị động cơ xăng 4 xy‑lanh 1.5L MIVEC, hộp số CVT, dẫn động cầu
                trước, ngôn ngữ thiết kế Dynamic Shield, 5 chỗ ngồi, mâm hợp kim 18‑inch.
              </p>
              <ul className="list-disc ml-6 text-[15px] text-gray-800 space-y-1 mb-6">
                <li className="text-[#1045a7] underline hover:no-underline">Mitsubishi Xforce Ultimate</li>
                <li className="text-[#1045a7] underline hover:no-underline">Mitsubishi Xforce Premium</li>
                <li className="text-[#1045a7] underline hover:no-underline">Mitsubishi Xforce Exceed</li>
                <li className="text-[#1045a7] underline hover:no-underline">Mitsubishi Xforce GLX</li>
              </ul>

              {/* Thông số kỹ thuật */}
              {car.specsImage && (
                <>
                  <h3 className="text-[18px] font-bold text-black mb-2">
                    Thông số kỹ thuật {car.name}
                  </h3>
                  <div className="w-full overflow-auto mb-6">
                    <img
                      src={car.specsImage}
                      alt={`Thông số kỹ thuật ${car.name}`}
                      className="w-full max-w-3xl mx-auto rounded"
                    />
                  </div>
                </>
              )}

              {/* Trang Thiết Bị */}
              <h3 className="text-[18px] font-bold text-black mb-2">
                Trang Thiết Bị {car.name}
              </h3>
              <div className="w-full overflow-auto">
                <img
                  src={car.equipment?.[0]?.image || "/images/xforce-accessory.jpg"}
                  alt={`Trang thiết bị ${car.name}`}
                  className="w-full max-w-3xl mx-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>
      )}

    {/* --- TỔNG QUAN --- */}
{renderFeatureSection(car.overviewSection)}

{/* --- NGOẠI THẤT --- */}
{renderFeatureSection(car.exteriorSection)}

{/* --- NỘI THẤT --- */}
{renderFeatureSection(car.interiorSection)}

{/* --- VẬN HÀNH --- */}
{renderFeatureSection(car.performanceSection)}

{/* --- AN TOÀN --- */}
{renderFeatureSection(car.safetySection)}

{/* --- THÔNG SỐ --- */}
{renderFeatureSection(car.specsSection)}

{/* --- HÌNH ẢNH --- */}
{renderFeatureSection(car.gallerySection)}

      {/* --- Các section đặc trưng tiếp theo (giữ nguyên) --- */}
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

      {/* Các section chi tiết cũ (nếu còn dùng) */}
      {hasSections &&
        car.sections.map((sec, i) => (
          <section key={i} className="container mx-auto my-4 bg-white rounded shadow p-4">
            <div className="flex items-center mb-3">
              <div className="font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l text-base">
                {sec.title}
              </div>
              <div className="flex-1 border-b-2 border-[#E51A1A] ml-2"></div>
            </div>
            {sec.blocks?.map((block, j) => (
              <div key={j} className="mb-5">
                {block.subtitle && <div className="font-semibold mb-1">{block.subtitle}</div>}
                {block.image && (
                  <img
                    src={block.image}
                    alt=""
                    className="w-full max-w-2xl mx-auto mb-2 rounded"
                  />
                )}
                {block.desc && <p className="text-gray-800">{block.desc}</p>}
              </div>
            ))}
          </section>
        ))}

      {/* Bộ sưu tập hình ảnh cuối */}
      {Array.isArray(car.gallery) && car.gallery.length > 0 && (
        <section className="container mx-auto my-4 bg-white rounded shadow p-4">
          <div className="flex items-center mb-3">
            <div className="font-extrabold uppercase text-[#E51A1A] bg-[#fff] px-4 py-2 border-l-8 border-[#E51A1A] rounded-l text-base">
              Hình ảnh {car.name}
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
