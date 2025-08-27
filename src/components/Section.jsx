import React from "react";

/**
 * Component Section - dùng để tạo khối nội dung (ảnh + văn bản)
 * Props:
 * - title: tiêu đề chính
 * - subtitle: tiêu đề phụ
 * - content: nội dung (string hoặc JSX)
 * - image: đường dẫn ảnh
 * - reverse: đảo vị trí ảnh và chữ (default = false)
 * - bg: màu nền (default = "bg-white")
 */
export default function Section({
  title,
  subtitle,
  content,
  image,
  reverse = false,
  bg = "bg-white",
}) {
  return (
    <section className={`${bg} py-12 md:py-20`}>
      <div className="container mx-auto px-4">
        {/* Subtitle */}
        {subtitle && (
          <p className="text-center text-red-500 font-semibold tracking-wider mb-2">
            {subtitle}
          </p>
        )}

        {/* Title */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-800 mb-10">
            {title}
          </h2>
        )}

        {/* Nội dung + ảnh */}
        <div
          className={`grid md:grid-cols-2 gap-8 items-center ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* Nội dung */}
          <div className="prose max-w-none text-slate-600 leading-relaxed">
            {typeof content === "string" ? <p>{content}</p> : content}
          </div>

          {/* Hình ảnh */}
          <div className="flex justify-center">
            <img
              src={image}
              alt={title || "section image"}
              className="rounded-2xl shadow-xl w-full max-w-[640px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
