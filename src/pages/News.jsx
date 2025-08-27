import React from "react";
import NewsGrid from "@/components/NewsGrid";
import newsData from "@/assets/newsData"; // mảng dữ liệu tin {slug,title,date,image,excerpt}

export default function News() {
  return (
    <main className="bg-white">
      {/* header nhẹ như site gốc */}
      <header className="bg-[#f3efed] border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="h-16 md:h-20 grid place-items-center">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-slate-900">
              Tin tức
            </h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        <NewsGrid items={newsData} />
      </section>
    </main>
  );
}
