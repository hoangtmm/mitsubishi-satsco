import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import newsData from "@/assets/newsData";
import newsArticles from "@/assets/newsArticles";

function formatDate(d) {
  const t = Date.parse(d);
  if (Number.isNaN(t)) return d;
  const date = new Date(t);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

/** TableBlock: render bảng so sánh */
function TableBlock({ headers = [], rows = [] }) {
  return (
    <div className="overflow-x-auto my-5">
      <table className="w-full border border-slate-300 border-collapse text-[15px]">
        {headers.length ? (
          <thead>
            <tr>
              {headers.map((h, idx) => (
                <th
                  key={idx}
                  className="border border-slate-300 bg-slate-100 px-3 py-2 text-left font-semibold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}

        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="align-top">
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className="border border-slate-300 px-3 py-2 align-top"
                  // Cho phép xuống dòng, in đậm... trong cell
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Render từng block nội dung */
function RenderBlock({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-3">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl font-semibold text-slate-900 mt-4 mb-2">
          {block.text}
        </h3>
      );
    case "p":
      return <p className="mb-4 leading-relaxed">{block.text}</p>;
    case "ul":
      return (
        <ul className="list-disc pl-6 space-y-1 mb-4">
          {block.items?.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-6 space-y-1 mb-4">
          {block.items?.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "img":
      return (
        <figure className="my-5">
          <img
            src={block.src}
            alt={block.alt || ""}
            className="w-full h-auto object-contain rounded-md shadow"
          />
          {block.caption && (
            <figcaption className="text-sm text-slate-500 mt-1">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "html":
      return (
        <div
          className="prose prose-slate max-w-none my-4"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    case "table":
      return <TableBlock headers={block.headers} rows={block.rows} />;

    default:
      return null;
  }
}

export default function NewsDetail() {
  const { slug } = useParams();

  // Bài trong danh sách
  const base = useMemo(() => newsData.find((n) => n.slug === slug), [slug]);
  if (!base) return <Navigate to="/tin-tuc" replace />;

  // Bài chi tiết (nếu có)
  const article = useMemo(
    () => newsArticles.find((n) => n.slug === slug),
    [slug]
  );

  // “Bài viết mới”
  const recent = newsData.filter((n) => n.slug !== slug).slice(0, 6);

  // tiêu đề & ảnh hiển thị
  const title = article?.title || base.title;
  const cover = article?.cover || base.image;

  return (
    <main className="bg-white">
      {/* Header */}
      <header className="bg-[#f3efed] border-b border-slate-200">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-full md:w-[420px] rounded-xl overflow-hidden shadow ring-1 ring-black/5 bg-white">
              <div className="aspect-[16/9] w-full">
                <img src={cover} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide text-slate-900">
                {title}
              </h1>

              <div className="mt-3 flex items-center gap-5 text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm14 8H3v10h18V10zM5 8h14V6H5v2z" />
                  </svg>
                  {formatDate(base.date)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14z" />
                  </svg>
                  tuan
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            {article?.blocks?.length ? (
              <div className="max-w-none">
                {article.blocks.map((b, i) => (
                  <RenderBlock key={i} block={b} />
                ))}
              </div>
            ) : (
              <div className="prose prose-slate max-w-none">
                <img
                  src={cover}
                  alt={title}
                  className="w-full h-auto object-contain rounded-md shadow mb-4"
                />
                <p>{base.excerpt}</p>
              </div>
            )}
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
