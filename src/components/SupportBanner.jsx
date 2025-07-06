const SupportBanner = () => (
  <section className="bg-black w-full py-8">
    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-4">
      <div className="flex flex-col items-center flex-1">
        <div className="font-extrabold text-2xl sm:text-3xl text-white uppercase text-center">
          HỖ TRỢ MUA XE MITSUBISHI TÂN BÌNH TRẢ GÓP ĐẾN 85%
        </div>
        <div className="mt-2 font-bold text-lg sm:text-xl text-white uppercase tracking-wide text-center">
          Lãi suất thấp - Thủ tục nhanh chóng
        </div>
      </div>
      <div className="flex-shrink-0">
        <a
          href="tel:0937878088"
          className="flex items-center bg-white rounded-lg shadow px-8 py-4 text-xl font-bold text-[#113866] hover:bg-gray-100 transition"
        >
          <svg className="w-6 h-6 mr-2 text-[#113866]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.98-.24 11.72 11.72 0 003.7.59 1 1 0 011 1v3.42a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.41a1 1 0 011 1c0 1.25.2 2.47.59 3.7a1 1 0 01-.24.98l-2.2 2.21z"/>
          </svg>
          094 7700 923
        </a>
      </div>
    </div>
  </section>
);

export default SupportBanner;
