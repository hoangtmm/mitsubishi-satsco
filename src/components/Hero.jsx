export default function Hero({
  title,
  image = "/images/about-hero.jpg",
  heightClass = "h-24 md:h-28",
  titleClass = "text-3xl md:text-5xl", // <-- chữ to hơn
  className = "",
}) {
  return (
    <section
      className={`relative w-full ${heightClass} bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />
      {/* chữ căng giữa tuyệt đối, bỏ margin/leading thừa */}
      <div className="absolute inset-0 grid place-items-center z-[2]">
        <h1 className={`m-0 leading-none font-extrabold tracking-wider text-white drop-shadow ${titleClass}`}>
          {title}
        </h1>
      </div>
    </section>
  );
}
