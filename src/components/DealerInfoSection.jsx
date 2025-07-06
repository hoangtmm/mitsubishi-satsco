const DealerInfoSection = () => (
  <section className="w-full bg-gray-50 py-12">
    <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto px-4 gap-8 items-stretch">
      {/* Bản đồ bên trái */}
      <div className="flex-1 min-w-[350px]">
        <div className="rounded-lg overflow-hidden w-full h-[500px]">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9686089085108!2d106.66353241143686!3d10.813714158458676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529186cede6df%3A0x9959b24160500a22!2zMUEgSOG7k25nIEjDoCwgUGjGsOG7nW5nIDIsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1751801652355!5m2!1svi!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Địa chỉ Mitsubishi"
          />
        </div>
      </div>
      {/* Thông tin bên phải */}
      <div className="flex-1 flex flex-col justify-start">   {/* Sửa tại đây: justify-center => justify-start */}
        <h2 className="text-3xl font-extrabold text-red-600 mb-4">GIỚI THIỆU ĐẠI LÝ</h2>
        <p className="mb-4 text-base text-gray-800">
          <b className="text-black"> Mitsubishi Motors Tân Bình</b> với vị trí đại lý thuận lợi, tiêu chí đặt khách hàng là nguồn sống. Đại lý luôn có nhiều chương trình mua xe hấp dẫn, quà tặng đặc biệt và mạng lưới liên kết ngân hàng lớn mạnh tại miền Nam. Mitsubishi Tân Bình luôn cam kết giúp khách hàng có được chiếc xe ưng ý nhất
        </p>
        <h3 className="font-bold text-lg mb-2">LIÊN HỆ</h3>
        <ul className="space-y-1 text-base">
          <li>
            <span className="font-bold">Địa chỉ:</span> <span className="font-bold">1A Hồng Hà, Phường 2, Quận Tân Bình, TP.HCM</span>
          </li>
          <li>
            <span className="font-bold">Website:</span> <a href="http://mitsubishivietnam.net" className="text-blue-700 hover:underline">www.mitsubishivietnam.net</a>
          </li>
          <li>
            <span className="font-bold">Email:</span> <a href="mailto:nguyenngocminhquan0311@gmail.com" className="text-blue-700 hover:underline">nguyenngocminhquan0311@gmail.com</a>
          </li>
          <li>
            <span className="font-bold">Hotline:</span> 094 7700 923
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default DealerInfoSection;
