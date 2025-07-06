const CarCard = ({ name, fuel, price, image }) => (
  <div className="flex flex-col items-center py-6 px-2">
    <img
      src={image}
      alt={name}
      className="w-[340px] h-[150px] object-contain mb-3 transition-transform duration-300 will-change-transform hover:scale-110"
    />
    <h3 className="font-bold text-xl mb-1 text-center">{name}</h3>
    <div className="mb-1 text-base text-center">
      Tiêu thụ: <b>{fuel}</b>
    </div>
    <div className="mb-2 text-red-600 font-bold text-lg text-center">
      Giá đặc biệt: {price}
    </div>
    <button className="mt-1 border border-gray-400 rounded px-6 py-2 text-base hover:bg-gray-100 transition">
      Xem thêm ...
    </button>
  </div>
);

export default CarCard;
