import Section from "../components/Section";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
export default function About() {
  return (
    <main className="bg-white">
      {/* HERO chuẩn như mock */}
 <Hero
  title="GIỚI THIỆU"
  image="/images/triton-ext-1.jpg"
  heightClass="h-24 md:h-28"      // chỉnh dày/mỏng dải hero
  titleClass="text-3xl md:text-5xl" // chữ to hơn
  className="mt-20"               // (tuỳ chọn) dính sát header, không còn khe hở
/>

    {/* SECTION 1 - Welcome (custom y hệt ảnh) */}
<section className="py-10 md:py-16">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-12 gap-10 items-center">
      
     {/* LEFT: subtitle + title + full paragraph */}
<div className="md:col-span-6">
  <div className="mb-6">
    {/* wrapper: chiều rộng = nội dung lớn nhất (h2), canh giữa dòng nhỏ theo h2 */}
    <div className="inline-flex flex-col items-center">
      <p className="uppercase text-red-500 font-semibold tracking-wider text-lg md:text-xl mb-1">
        CHÀO MỪNG ĐẾN VỚI
      </p>
      <h2 className="text-[#12385b] font-extrabold leading-tight text-3xl md:text-5xl">
        MITSUBISHI TÂN BÌNH
      </h2>
    </div>
  </div>

  <p className="text-slate-700 leading-7 md:leading-8 text-justify md:text-left">
    <span className="font-extrabold">MITSUBISHI TÂN BÌNH</span> ra mắt thành đại lý chuẩn 3S của Mitsubishi Motor Việt Nam từ năm 2015, được
    thành lập trực thuộc Công ty Cổ phần Vận tải Hàng không Miền Nam (viết tắt là SATSCO). Mitsubishi Tân Bình | SATSCO có diện tích hơn
    <span className="font-semibold"> 6.000m²</span>, bao gồm khu vực showroom trưng bày các dòng xe Mitsubishi, kinh doanh các dòng xe Mitsubishi từ
    5 đến 7 chỗ. Với giá trị cốt lõi lấy sự hài lòng của khách hàng làm phương châm phục vụ, Mitsubishi Tân Bình | SATSCO luôn cam kết mang lại cho
    quý khách sự an tâm và hài lòng trong từng trải nghiệm.
  </p>
</div>


      {/* RIGHT: image with rounded + shadow */}
      <div className="md:col-span-6">
        <img
          src="/images/mitsubishi-satsco.jpg"
          alt="Mitsubishi Tân Bình | SATSCO"
          className="w-full rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] ring-1 ring-black/5 object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* SECTION 2 - Cơ sở vật chất */}
      <Section
        title="CƠ SỞ VẬT CHẤT"
        image="/images/about-2.jpg"
        reverse
        bg="bg-slate-50"
        content={
          <>
            <p className="mb-4">
              Xưởng dịch vụ theo mô hình chuẩn 3S của Mitsubishi Motors với quy trình
              <strong> SỬA CHỮA – BẢO DƯỠNG – ĐĂNG KIỂM NHANH</strong>. Đội ngũ kỹ thuật viên được đào tạo bài bản,
              trang thiết bị hiện đại, đáp ứng tiêu chí: <em>Uy tín – Chất lượng – Hiệu quả – Nhanh chóng</em>.
            </p>
            <p>
              Khu trưng bày rộng rãi, tiện nghi, cùng nhiều khu chức năng phục vụ khách hàng tại TP.HCM và khu vực lân cận.
            </p>
          </>
        }
      />
{/* LỢI ÍCH - accordion như ảnh */}
      <Benefits />
 
    </main>
  );
}
