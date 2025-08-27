import React from "react";
import { Link } from "react-router-dom";

function formatDate(d) {
  const date = new Date(d);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function NewsGridCard({ slug, title, date, image, excerpt }) {
  return (
    <article className="bg-white border border-slate-200 rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow">
      {/* image + date badge */}
      <Link to={`/tin-tuc/${slug}`} className="block">
        {/* ✅ khung ảnh cao cố định + object-contain (không cắt ảnh) */}
        <div className="relative w-full bg-white">
          <div className="h-[180px] md:h-[210px] flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain"  // <-- không cắt ảnh
            />
          </div>

          {/* date badge */}
          <div className="absolute left-2 top-2 px-2 py-1 rounded text-[12px] font-semibold bg-black/85 text-white flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M7 2h2v2h6V2h2v2h3a1 1 0 011 1v15a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h3V2zm14 8H3v10h18V10zM5 8h14V6H5v2z" />
            </svg>
            {date}
          </div>
        </div>
      </Link>

      {/* body */}
      <div className="p-3">
        <Link to={`/tin-tuc/${slug}`} className="block">
          <h3 className="text-center font-semibold uppercase text-slate-900 leading-snug hover:text-red-600 transition-colors">
            {title}
          </h3>
        </Link>
        {excerpt && (
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 text-center">
            {excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
