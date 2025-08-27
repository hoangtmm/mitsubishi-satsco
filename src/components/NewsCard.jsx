import { Link } from "react-router-dom";

/**
 * NewsCard (dùng ở trang Home)
 * props:
 * - slug: string (bắt buộc) -> dùng để điều hướng /tin-tuc/:slug
 * - image: string
 * - title: string
 * - date: string
 * - large: boolean (kích thước lớn nhỏ)
 */
const NewsCard = ({ slug, image, title, date, large = false }) => {
  const heightCls = large ? "h-[270px] md:h-[300px]" : "h-[180px] md:h-[210px]";

  return (
    <Link
      to={`/tin-tuc/${slug}`}
      className={`relative block overflow-hidden rounded-xl ${heightCls}
                  bg-gray-100 shadow transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-1 group`}
      aria-label={title}
    >
      {/* Ảnh */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Overlay (không chặn click) */}
      {image && (
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10
                        transition-colors pointer-events-none" />
      )}

      {/* Nội dung */}
      <div className={`relative z-10 p-4 ${image ? "text-white" : "text-gray-800"}`}>
        <div className="text-xs mb-1 opacity-90">{date}</div>
        <h3 className="font-bold text-lg leading-tight line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default NewsCard;
