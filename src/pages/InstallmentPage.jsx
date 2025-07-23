import React from "react";
function InstallmentPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-red-700">
            Thủ tục mua xe trả góp Mitsubishi
        </h1>
        <p className="mb-6 text-lg text-gray-700">
            Quý khách hàng có thể sở hữu xe Mitsubishi một cách dễ dàng thông qua hình thức trả góp,
            chỉ cần trả trước từ <span className="font-semibold text-red-700">15% đến 30%</span> giá trị xe,
            phần còn lại vay ngân hàng với thủ tục nhanh chóng, lãi suất ưu đãi.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-8 shadow">
            <h2 className="text-xl font-bold text-red-600 mb-2">Ví dụ minh họa:</h2>
            <p>
                Khách hàng mua xe trị giá <b>600 triệu</b>, trả trước 30% (<b>180 triệu</b>), còn lại vay 420 triệu,
                thời hạn vay 5 năm, lãi suất 7%/năm. Ước tính số tiền trả hàng tháng (gốc + lãi) khoảng
                <b className="text-red-700"> 8 triệu đồng/tháng</b>.
            </p>
            <p className="mt-2 text-xs text-gray-500">
                * Lưu ý: Số liệu minh họa, ngân hàng sẽ tính toán chính xác khi duyệt hồ sơ.
            </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            I. Lợi ích & Đặc điểm mua xe trả góp
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
            <li>Vay tối đa <b>80% – 85%</b> giá trị xe, thời hạn vay lên đến <b>8 năm</b>.</li>
            <li>Không cần thế chấp tài sản ngoài xe mua trả góp.</li>
            <li>Thủ tục nhanh chóng, xét duyệt trong <b>24h</b>.</li>
            <li>Lãi suất ưu đãi, linh hoạt theo dư nợ giảm dần hoặc cố định tùy chương trình.</li>
            <li>Hỗ trợ khách hàng toàn quốc, nhiều ngân hàng liên kết.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            II. Điều kiện vay vốn mua xe
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
            <li>Công dân Việt Nam từ 18 – 60 tuổi, thu nhập ổn định.</li>
            <li>Doanh nghiệp thành lập trên 12 tháng, tình hình tài chính lành mạnh.</li>
            <li>Có tài sản đảm bảo (chính xe định mua hoặc bất động sản, tiết kiệm…).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            III. Hồ sơ mua xe trả góp cần chuẩn bị
        </h2>
        <h3 className="font-semibold mt-3 mb-1 text-gray-700">A. Khách hàng cá nhân</h3>
        <ul className="list-decimal list-inside mb-2 text-gray-700">
            <li>CMND/CCCD, sổ hộ khẩu/sổ tạm trú (bản sao).</li>
            <li>Giấy đăng ký kết hôn hoặc xác nhận độc thân.</li>
            <li>Chứng minh thu nhập: bảng lương, sao kê ngân hàng, hợp đồng lao động,…</li>
        </ul>
        <h3 className="font-semibold mt-3 mb-1 text-gray-700">B. Khách hàng doanh nghiệp</h3>
        <ul className="list-decimal list-inside mb-6 text-gray-700">
            <li>Giấy phép đăng ký kinh doanh, mã số thuế, mẫu dấu.</li>
            <li>Báo cáo tài chính 1–2 năm gần nhất, hóa đơn VAT.</li>
            <li>Hợp đồng mua bán, hồ sơ pháp lý bổ sung (nếu cần).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            IV. Quy trình mua xe trả góp
        </h2>
        <ol className="list-decimal list-inside mb-8 text-gray-700 space-y-1">
            <li>Tư vấn dòng xe phù hợp, hỗ trợ chọn ngân hàng tối ưu.</li>
            <li>Chuẩn bị & hoàn thiện hồ sơ theo hướng dẫn.</li>
            <li>Ngân hàng thẩm định, xét duyệt hồ sơ trong 24–48h.</li>
            <li>Ký hợp đồng tín dụng với ngân hàng và đóng phí trả trước.</li>
            <li>Ngân hàng giải ngân, nhận xe mới tại đại lý Mitsubishi.</li>
        </ol>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-8">
            <b>Đừng ngần ngại liên hệ:</b> Đội ngũ tư vấn của chúng tôi sẽ hỗ trợ hoàn thiện hồ sơ và quy trình miễn phí!
        </div>

        <a
            href="tel:0947700923"
            className="block w-fit mx-auto mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-lg shadow-lg transition"
        >
            Đăng ký tư vấn mua trả góp
        </a>
    </section>
);
}
export default InstallmentPage;
