// src/pages/InstallmentPage.jsx
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import FloatingHotline from '../components/FloatingHotline';
import { FaStar } from "react-icons/fa6";

const docsPersonal = [
    'CMND/CCCD và Hộ khẩu',
    'Giấy chứng nhận độc thân/đã kết hôn',
    'Chứng minh thu nhập (hợp đồng, sao kê, sổ tiết kiệm…)',
    'Tài sản bảo đảm (nếu cần).',
];

const docsCorporate = [
    'Giấy phép kinh doanh',
    'Mã số thuế',
    'Báo cáo thuế/Tài chính gần nhất',
    'Hợp đồng kinh tế đầu ra/đầu vào',
    // …
];

const loanDescription = `Là trả trước một phần tiền mua xe, phần còn thiếu sẽ vay ngân hàng rồi hàng tháng trả dần cho ngân hàng cả gốc và lãi theo phuơng thức trừ lùi trong suốt thời gian trả góp.`;

const loanExample = `Khách hàng A mua trả góp xe Mitsubishi Mirage 1.2 CVT trị giá 473 triệu theo phương thức: TRẢ TRƯỚC 25% = 118 triệu, phần còn lại là 355 triệu sẽ vay ngân hàng với lãi suất 5,99%/năm không đổi trong 6 tháng đầu tháng đầu, sau 6 tháng lãi suất là (9.1%/ 1 năm) và trả góp trong 5 năm (Cụ thể: sau khi tính toán, mỗi tháng khách hàng A phải trả 1.773.750 VNĐ (tiền lãi cho tháng đầu tiên) và biên độ giảm dần đến tháng cuối cùng là theo quy tắc trừ lùi 29.563 VNĐ (tiễn lãi tháng cuối cùng). Như vậy trong 5 năm tổng số tiền lãi khách hàng phải chịu là 54.099.375 VNĐ.`;

const InstallmentPage = () => (
    <>
        <Header />
        {/* Hero Banner */}
        <section
            className="relative w-full h-[220px] md:h-[350px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="z-10 text-white text-3xl md:text-5xl font-bold text-center tracking-wide drop-shadow">
                    THỦ TỤC TRẢ GÓP
                </h1>
            </div>
        </section>

        <main className="bg-gray-100">
            <div className="container mx-auto px-4 py-12 space-y-12">

                {/* Tiêu đề + mô tả + ví dụ */} 
                <section className="bg-white p-8 rounded-lg shadow">
                    <p className="text-gray-700 mb-6">{loanDescription}</p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                        <h3 className="font-semibold text-xl mb-2">Ví dụ tính trả góp</h3>
                        <p className="text-gray-800 whitespace-pre-line">{loanExample}</p>
                    </div>
                </section>

                {/* Form đăng ký */}
                <section className="bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Đăng ký mua Mitsubishi trả góp</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Giá trị xe (VNĐ)" className="border rounded p-3" />
                        <input type="text" placeholder="Tên bạn" className="border rounded p-3" />
                        <input type="tel" placeholder="Số điện thoại" className="border rounded p-3" />
                        <select className="border rounded p-3">
                            <option>Chọn dòng xe quan tâm</option>
                            <option>Xpander</option>
                            <option>Xforce</option>
                            <option>Attrage</option>
                            {/* … */}
                        </select>
                        <button
                            type="submit"
                            className="col-span-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                        >
                            Đăng ký
                        </button>
                    </form>
                </section>

                {/* Lợi ích – Điều kiện – Đối tượng (box đẹp) */}
                <section className="grid md:grid-cols-3 gap-6">
                    {/* Lợi ích */}
                    <div className="bg-white rounded-2xl border border-gray-300 shadow-sm px-6 pb-7 pt-4 flex flex-col items-center transition hover:shadow-md">
                        <FaStar className="text-blue-600 text-3xl mb-2" />
                        <hr className="w-full border-dashed border-gray-400 mb-2" />
                        <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">Lợi ích khi mua xe trả góp</h3>
                        <ol className="text-gray-700 text-sm space-y-1 w-full">
                            <li>1. Số tiền vay lên đến <b>85% giá trị xe</b>.</li>
                            <li>2. Thời gian vay lên đến <b>8 năm</b>.</li>
                            <li>3. Hỗ trợ vay mua xe ô tô mới và xe ô tô đã qua sử dụng.</li>
                            <li>4. Thủ tục vay đơn giản, thời gian xử lý hồ sơ nhanh chóng.</li>
                            <li>5. Phương thức trả nợ linh hoạt: lãi trả hàng tháng/hàng quý, vốn trả theo phương thức vốn góp đều hoặc vốn góp bậc thang giảm dần.</li>
                        </ol>
                    </div>
                    {/* Điều kiện */}
                    <div className="bg-white rounded-2xl border border-gray-300 shadow-sm px-6 pb-7 pt-4 flex flex-col items-center transition hover:shadow-md">
                        <FaStar className="text-blue-600 text-3xl mb-2" />
                        <hr className="w-full border-dashed border-gray-400 mb-2" />
                        <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">Điều kiện mua xe trả góp</h3>
                        <ol className="text-gray-700 text-sm space-y-1 w-full">
                            <li>1. Cá nhân từ 18 tuổi trở lên.</li>
                            <li>2. Doanh nghiệp thành lập trên 6 tháng.</li>
                            <li>3. Có hợp đồng mua bán xe và các giấy tờ có liên quan.</li>
                            <li>4. Có thu nhập đảm bảo cho việc trả nợ cho Ngân hàng.</li>
                            <li>5. Có tài sản đảm bảo: là chính chiếc xe ô tô mà Quý khách mua, bất động sản hoặc tài sản khác.</li>
                        </ol>
                    </div>
                    {/* Đối tượng */}
                    <div className="bg-white rounded-2xl border border-gray-300 shadow-sm px-6 pb-7 pt-4 flex flex-col items-center transition hover:shadow-md">
                        <FaStar className="text-blue-600 text-3xl mb-2" />
                        <hr className="w-full border-dashed border-gray-400 mb-2" />
                        <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">Đối tượng thích hợp nhất</h3>
                        <ol className="text-gray-700 text-sm space-y-1 w-full">
                            <li>1. Doanh nhân, doanh nghiệp: những người có khả năng sử dụng tiền để kinh doanh sinh lời nhiều hơn lãi suất vay của ngân hàng.</li>
                            <li>2. Những người rất cần sử dụng xe, sẽ có đủ tiền mua xe trong một tương lai gần nhưng hiện tại chưa tập trung đủ tiền để mua xe trả thẳng.</li>
                        </ol>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {/* Cá nhân */}
                    <div className="bg-white rounded-xl border border-gray-300 px-7 py-5 shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-3 text-center">I. ĐỐI VỚI CÁ NHÂN</h3>
                        <ol className="list-decimal list-inside text-gray-800 text-sm md:text-base space-y-1 mb-2">
                            <li>Chứng Minh Nhân Dân và Hộ khẩu.</li>
                            <li>Giấy chứng nhận độc thân hoặc Giấy chứng nhận đăng ký kết hôn.</li>
                            <li>
                                Những giấy tờ chứng minh thu nhập:
                                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                                    <li>Giấy xác nhận mức lương và hợp đồng lao động, sổ tiết kiệm, tài khoản cá nhân.</li>
                                    <li>Hợp đồng cho thuê nhà, cho thuê xe, cho thuê xưởng, giấy góp vốn, cổ phần, cổ phiếu, trái phiếu.</li>
                                    <li>Giấy tờ xác nhận sở hữu tài sản có giá trị: bất động sản, các loại xe ô tô, máy móc, dây chuyền nhà máy, nhà xưởng...</li>
                                    <li>
                                        Nếu cá nhân có công ty/doanh nghiệp hoặc chủ yếu tự công ty tự trả lương thì cần thêm: giấy phép kinh doanh, báo cáo thuế, báo cáo tài chính, bảng lương, bảng chia lợi nhuận tự động.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <p className="text-sm italic text-red-500 mt-2">
                            (Trong trường hợp cá nhân không đủ điều kiện vay Ngân hàng, có thể nhờ người thân có khả năng và thu nhập tốt làm giấy bảo lãnh cho Ngân hàng thẩm định).
                        </p>
                    </div>

                    {/* Doanh nghiệp */}
                    <div className="bg-white rounded-xl border border-gray-300 px-7 py-5 shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-3 text-center">II. ĐỐI VỚI DOANH NGHIỆP</h3>
                        <ol className="list-decimal list-inside text-gray-800 text-sm md:text-base space-y-1">
                            <li>Giấy phép kinh doanh.</li>
                            <li>Mã số thuế.</li>
                            <li>Giấy bổ nhiệm Giám đốc, bổ nhiệm Kế toán trưởng.</li>
                            <li>Giấy đăng ký sử dụng mẫu dấu.</li>
                            <li>Báo cáo thuế một năm (hoặc 6 tháng) gần nhất.</li>
                            <li>Báo cáo hóa đơn VAT một năm (hoặc 6 tháng) gần nhất.</li>
                            <li>Báo cáo tài chính một năm (hoặc 6 tháng) gần nhất.</li>
                            <li>Hợp đồng kinh tế đầu ra, đầu vào.</li>
                        </ol>
                    </div>
                </section>

            </div>
        </main>

        <FloatingHotline />
    </>
);

export default InstallmentPage;
