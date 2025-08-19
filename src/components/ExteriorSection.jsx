export default function ExteriorSection({ section }) {
  if (!section) return null;

  return (
    <section className="container mx-auto my-8 bg-white rounded shadow overflow-hidden">
      {/* Header đỏ + gạch chân đỏ chạy hết chiều ngang */}
      <div className="px-4 pt-3">
        <span className="inline-block text-lg md:text-xl font-extrabold uppercase bg-[#E51A1A] text-white px-4 py-2 rounded-tl rounded-bl tracking-wide shadow border-l-4 border-[#E51A1A]">
          {section.title}
        </span>
      </div>
      <div className="border-b-[3px] border-[#E51A1A] mt-2" />

      {/* Các block: Đầu xe / Thân xe ... */}
      <div className="p-4 md:p-6">
        {section.blocks?.map((b, i) => (
          <article key={i} className="mb-8">
            {/* Sub title */}
            {b.subtitle && (
              <h3 className="text-base md:text-lg font-bold text-black mb-2">
                {b.subtitle}
              </h3>
            )}

            {/* Mô tả */}
            {b.desc && (
              <p className="text-[15px] md:text-base leading-7 text-[#333] mb-3">
                {b.desc}
              </p>
            )}

            {/* Ảnh + caption */}
            {b.images?.map((img, j) => (
              <figure key={j} className="mb-4">
                <img
                  src={img.src}
                  alt={img.alt || ""}
                  className="w-full h-auto rounded shadow-sm object-cover"
                />
                {img.caption && (
                  <figcaption className="text-sm md:text-base text-[#555] mt-2">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
