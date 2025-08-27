import React, { useState } from "react";

/**
 * Accordion "Những lợi ích mang lại cho khách hàng"
 * - Trái: danh sách accordion
 * - Phải: ảnh + caption
 */
export default function Benefits() {
  const items = [
    {
      title: "Địa Điểm Thuận Lợi",
      body:
        "Mitsubishi Tân Bình | SATSCO nằm ngay khu vực trung tâm thành phố, gần sân bay quốc tế Tân Sơn Nhất (chỉ cách khoảng 100m), thuận tiện và tiết kiệm thời gian đi lại cho quý khách.",
    },
    {
      title: "Công Nghệ Tiên Tiến",
      body:
        "Với trang thiết bị nhập khẩu hiện đại, đáp ứng những nhu cầu khắt khe nhất, phòng sơn đạt chuẩn quốc tế, sử dụng hệ thống khuấy sơn pha màu tiên tiến trong khu vực khép kín, đảm bảo vệ sinh môi trường. Mitsubishi Tân Bình | SATSCO luôn cam kết chất lượng tốt nhất.",
    },
    {
      title: "Hết Lòng Vì Khách Hàng",
      body:
        "Ngoài ra, Mitsubishi Tân Bình | SATSCO còn liên kết với các đối tác tài chính ngân hàng, và các đơn vị bảo hiểm, nhằm mang đến dịch vụ tốt nhất đến từng khách hàng. Một số đối tác chính: TPBank, VPBank, ShinhanBank,…",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#e14f4f] font-extrabold tracking-wide text-2xl md:text-3xl mb-8 md:mb-12">
          NHỮNG LỢI ÍCH MANG LẠI CHO KHÁCH HÀNG
        </h2>

        <div className="grid md:grid-cols-12 gap-10">
          {/* LEFT: Accordion */}
          <div className="md:col-span-7">
            <div className="rounded-lg">
              {items.map((it, idx) => {
                const open = active === idx;
                return (
                  <div key={it.title} className="border-b last:border-b-0 border-slate-200">
                    <button
                      type="button"
                      onClick={() => setActive(open ? null : idx)}
                      className="w-full flex items-center gap-3 py-4"
                    >
                      {/* triangle icon */}
                      <span
                        className={`inline-block w-0 h-0 border-l-[10px] border-l-[#12385b] border-y-[7px] border-y-transparent transition-transform duration-200 ${
                          open ? "-rotate-90 !border-l-red-600" : ""
                        }`}
                      />
                      <span
                        className={`text-base md:text-lg font-semibold ${
                          open ? "text-red-600" : "text-[#12385b]"
                        }`}
                      >
                        {it.title}
                      </span>
                    </button>

                    {/* body */}
                    <div
                      className={`pl-[34px] pr-2 overflow-hidden transition-all duration-300 ease-out ${
                        open ? "max-h-[280px] pt-2 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-slate-700 leading-7">
                        {it.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Image + caption */}
          <div className="md:col-span-5">
            <figure className="flex flex-col items-center">
              <img
                src="/images/benefits-side.jpg" // đặt ảnh của bạn vào public/images/benefits-side.jpg
                alt="Phòng kinh doanh"
                className="w-full rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/5 object-cover"
              />
              <figcaption className="mt-4 text-[#e14f4f] font-semibold text-lg">
                Phòng kinh doanh
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
