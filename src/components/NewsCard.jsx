const NewsCard = ({ image, title, date, large }) => (
  <div
    className={`
      relative overflow-hidden rounded-xl 
      transition-all duration-300
      bg-gray-100 flex flex-col justify-end
      cursor-pointer
      ${large ? "h-[270px]" : "h-[180px]"}
      shadow
      hover:shadow-2xl hover:-translate-y-1
      group
    `}
  >
    {/* Ảnh, nếu có */}
    {image && (
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover
          transition-transform duration-300
          group-hover:scale-105"
      />
    )}
    {/* Overlay nếu có ảnh */}
    {image && (
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
    )}

    {/* Nội dung */}
    <div className={`relative z-10 p-4 ${image ? "text-white" : "text-gray-800"}`}>
      <div className="text-xs mb-1">{date}</div>
      <div className="font-bold text-lg leading-tight">{title}</div>
    </div>
  </div>
);

export default NewsCard;
