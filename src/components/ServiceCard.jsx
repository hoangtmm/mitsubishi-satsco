const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center min-h-[390px] transition hover:-translate-y-1 hover:shadow-xl duration-200">
    <img src={icon} alt={title} className="w-20 h-20 mb-4" />
    <h3 className="text-red-600 font-bold text-xl mb-2">{title}</h3>
    <div className="flex-grow flex flex-col w-full">
      <p className="text-gray-700 mb-5">{desc}</p>
    </div>
    {/* Nút và gạch bọc trong 1 div mt-auto để luôn chạm đáy */}
    <div className="w-full flex flex-col items-center mt-auto">
      <button className="font-bold text-base text-[#c47446] flex items-center gap-2 focus:outline-none bg-transparent border-none p-0 cursor-pointer" tabIndex={0}>
        XEM NGAY
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path d="M4 8h8M8 4l4 4-4 4" stroke="#c47446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <span className="block border-b-2 border-[#edcdb6] w-16 mt-1"></span>
    </div>
  </div>
);

export default ServiceCard;
