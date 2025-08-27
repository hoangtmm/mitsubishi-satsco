import React from "react";
import { Link } from "react-router-dom";

/** format 599000000 -> "599.000.000 VNĐ" */
function formatCurrencyVND(n) {
  try {
    return n.toLocaleString("vi-VN") + " VNĐ";
  } catch {
    return `${n} VNĐ`;
  }
}

/**
 * PriceCard
 * props:
 * - name, image, variants, slug
 */
export default function PriceCard({ name, image, variants = [], slug }) {
  const minPriceMil = Math.min(...variants.map((v) => v.priceMil));
  const minPrice = Math.round(minPriceMil * 1_000_000);

  const link = slug ? `/${slug}` : null; // bạn đang dùng route "/:slug"

  return (
    <article className="py-6 md:py-8">
      <div className="grid md:grid-cols-12 gap-6 items-center">
        {/* LEFT: ảnh (click để sang trang sản phẩm) + caption */}
        <div className="md:col-span-5">
          {link ? (
            <Link
              to={link}
              aria-label={`Xem chi tiết ${name}`}
              className="block group focus:outline-none focus:ring-2 focus:ring-red-600 rounded-xl"
            >
              <img
                src={image}
                alt={name}
                className="w-full rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.18)] ring-1 ring-black/5 object-cover transition-transform group-hover:-translate-y-0.5"
              />
              <div className="mt-2 font-extrabold text-slate-900 text-lg md:text-2xl tracking-tight group-hover:text-red-600 transition-colors">
                {name}
              </div>
            </Link>
          ) : (
            <figure>
              <img
                src={image}
                alt={name}
                className="w-full rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.18)] ring-1 ring-black/5 object-cover"
              />
              <figcaption className="mt-2 font-extrabold text-slate-900 text-lg md:text-2xl tracking-tight">
                {name}
              </figcaption>
            </figure>
          )}
        </div>

        {/* RIGHT: list of variants + starting price */}
        <div className="md:col-span-7">
          <ul className="divide-y divide-slate-200 rounded-md overflow-hidden border border-slate-200">
            {variants.map((v, i) => (
              <li
                key={v.label}
                className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-3.5 ${
                  i % 2 === 1 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <span className="text-[#12385b] font-semibold">
                  {name} {v.label}:
                </span>
                <span className="bg-slate-100 px-3 py-1.5 rounded text-slate-800">
                  {v.priceMil} triệu đ
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-right">
            <span className="text-red-600 font-bold text-lg md:text-xl">
              Giá: từ {formatCurrencyVND(minPrice)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
