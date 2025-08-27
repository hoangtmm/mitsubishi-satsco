import React from "react";
import Hero from "@/components/Hero";
import PriceCard from "@/components/PriceCard";

const data = [
  {
    slug: "all-new-xforce",            // <-- thêm slug
    name: "Mitsubishi Xforce",
    image: "/images/xforce1.jpg",
    variants: [
      { label: "Ultimate (1 tone)", priceMil: 705 },
      { label: "Premium",          priceMil: 680 },
      { label: "Exceed",           priceMil: 640 },
      { label: "GLX",              priceMil: 599 },
    ],
  },
    {
    slug: "all-new-xpander",               // ⬅️ đuôi link như bạn yêu cầu
    name: "Mitsubishi Xpander 2025",
    image: "/images/xpander.jpg",          // đặt ảnh ở public/images/xpander.jpg
    variants: [
      { label: "NEW XPANDER MT",         priceMil: 560 },
      { label: "NEW XPANDER AT",         priceMil: 598 },
      { label: "NEW XPANDER AT Premium", priceMil: 658 },
    ],
  },
  {
  slug: "new-outlander",
  name: "Mitsubishi Outlander",
  image: "/images/outlander.jpg",
  variants: [
    { label: "Mitsubishi Outlander 2.0 CVT New", priceMil: 825 },
    { label: "Mitsubishi Outlander 2.0 CVT Premium New", priceMil: 950 },
  ],
},
{
  slug: "new-pajero-sport",
  name: "Mitsubishi Pajero Sport",
  image: "/images/pajero-sport.jpg",
  variants: [
    { label: "PAJERO SPORT Diesel 4×2 AT 2022", priceMil: 1130 },
    { label: "PAJERO SPORT Diesel 4×4 AT 2021", priceMil: 1365 },
  ],
},
{
  slug: "triton-4wd-at-athlete",
  name: "Mitsubishi Triton",
  image: "/images/triton.jpg",
  variants: [
    { label: "Triton GLX 4x2 AT Euro 5",             priceMil: 650 },
    { label: "Triton GLS 4x2 AT Athlete Euro 5",     priceMil: 780 },
    { label: "Triton GLS 4x4 AT Athlete Euro 5",     priceMil: 905 },
  ],
},
{
  slug: "new-attrage",
  name: "Mitsubishi Attrage",
  image: "/images/attrage.jpg",
  variants: [
    { label: "Mitsubishi Attrage MT",           priceMil: 380 },
    { label: "Mitsubishi Attrage CVT",          priceMil: 465 },
    { label: "Mitsubishi Attrage CVT Premium",  priceMil: 490 },
  ],
},
{
  slug: "xpander-cross",
  name: "Xpander Cross 2025",
  image: "/images/xforce.jpg",
  variants: [
    { label: "Mitsubishi Xpander Cross 2024", priceMil: 698 },
  ],
}
  // Thêm xe khác nếu cần, nhớ có slug cho mỗi xe
];

export default function PriceList() {
  return (
    <main className="bg-white">
      {/* banner */}
      <Hero
        title="BẢNG GIÁ XE"
        image="/images/triton-ext-1.jpg"
        heightClass="h-20 md:h-35"       // Tailwind hợp lệ
        titleClass="text-3xl md:text-5xl"
       className="mt-20"               // dính sát header
      />

      <section className="container mx-auto px-4 py-10 md:py-12">
        {data.map((m) => (
          <div key={m.slug || m.name} className="mb-10 md:mb-14">
            <PriceCard
              name={m.name}
              image={m.image}
              variants={m.variants}
              slug={m.slug}              // <-- truyền slug để ảnh trở thành Link
            />
          </div>
        ))}
      </section>
    </main>
  );
}
