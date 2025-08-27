import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import newsData from "@/assets/newsData";

function formatDate(d) {
  // nhận ISO hoặc chuỗi dd/mm/yyyy, nếu không parse được thì trả nguyên bản
  const t = Date.parse(d);
  if (Number.isNaN(t)) return d;
  const date = new Date(t);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function NewsDetail() {
  const { slug } = useParams();

  const article = useMemo(
    () => newsData.find((n) => n.slug === slug),
    [slug]
  );

  if (!article) return <Navigate to="/tin-tuc" replace />;

  // các bài viết mới (ngoại trừ bài hiện tại)
  const recent = newsData.filter((n) => n.slug !== slug).slice(0, 6);

  return (
    <main className="bg-white">
      {/* Thanh top với ảnh nhỏ bên trái + tiêu đề + meta */}
    <header className="bg-[#f3efed] border-b border-slate-200">
  <div className="container mx-auto px-4 py-6 md:py-8">
    {/* dùng flex để canh ảnh bên trái, nội dung bên phải */}
    <div className="flex flex-col md:flex-row md:items-end gap-6">
      {/* ẢNH: khung cố định, tỉ lệ 16:9 + object-cover cho kín khung */}
      <div className="w-full md:w-[380px] lg:w-[420px] rounded-xl overflow-hidden shadow ring-1 ring-black/5 bg-white">
        <div className="aspect-[16/9] w-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* TIÊU ĐỀ + META */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide text-slate-900">
          {article.title}
        </h1>

        <div className="mt-3 flex items-center gap-5 text-slate-600">
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm14 8H3v10h18V10zM5 8h14V6H5v2z"/>
            </svg>
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14z"/>
            </svg>
            tuan
          </span>
        </div>
      </div>
    </div>
  </div>
</header>


      {/* Nội dung + Sidebar “Bài viết mới” (không có Chuyên mục) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main article */}
          <article className="lg:col-span-8">
            <h2 className="text-2xl md:text-[28px] font-extrabold text-slate-900 mb-4">
              {article.title.replace(/2025/i, "2025 Tại Thị Trường Việt Nam")}
            </h2>

            {/* Ảnh lớn ngay đầu bài */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-lg shadow mb-6"
            />

            {/* Nội dung demo – có thể thay bằng article.content nếu bạn thêm vào data */}
            <div className="prose prose-slate max-w-none">
              <p>
                {article.excerpt ??
                  "Mitsubishi tiếp tục khẳng định định hướng thiết kế Dynamic Shield với nhiều cải tiến về an toàn, tiện nghi và khả năng vận hành."}
              </p>

              <p>
                Khoang cabin được tối ưu về công thái học, màn hình giải trí
                trung tâm kích thước lớn, hỗ trợ kết nối Apple CarPlay/Android Auto.
                Bên cạnh đó, các công nghệ như RCTA, BSW, ACC… được trang bị đầy đủ.
              </p>

              <h3>Điểm nhấn nổi bật</h3>
              <ul>
                <li>Thiết kế mới mạnh mẽ, góc cạnh.</li>
                <li>Khoang nội thất rộng rãi, đa dụng.</li>
                <li>Gói an toàn chủ động tiên tiến.</li>
                <li>Giá bán cạnh tranh kèm nhiều ưu đãi.</li>
              </ul>

              <p>
                Liên hệ Mitsubishi Tân Bình | SATSCO để nhận tư vấn chi tiết và
                đăng ký lái thử sớm nhất.
              </p>
            </div>
          </article>

          {/* Sidebar: Bài viết mới */}
          <aside className="lg:col-span-4">
            <h3 className="mb-3 inline-block rounded bg-red-500 text-white px-3 py-1 text-sm font-bold">
              Bài viết mới
            </h3>

            <div className="rounded-md border border-slate-200 overflow-hidden">
              {recent.map((n) => (
                <Link
                  key={n.slug}
                  to={`/tin-tuc/${n.slug}`}
                  className="flex gap-3 items-start p-3 hover:bg-slate-50 border-b border-slate-200 last:border-b-0"
                >
                  <div className="w-[88px] h-[68px] rounded bg-white ring-1 ring-black/5 overflow-hidden flex items-center justify-center">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 mb-1">
                      {formatDate(n.date)}
                    </div>
                    <div className="text-[15px] font-semibold leading-snug text-slate-900 line-clamp-2">
                      {n.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
