const carData = [
  {
    slug: "all-new-xforce",
    name: "ALL-NEW XFORCE",
    fuel: "5.5L/100Km",
    price: "599,000,000 ₫",
    image: "/images/xforce.png",
    banner: "/images/xforce.png",
    hotline: "094 7700 923",
    promo: [
      "Giảm 50% Lệ Phí Trước Bạ",
      "Tặng bảo hiểm thân vỏ 01 năm",
      "Quà tặng phụ kiện hấp dẫn từ đại lý Mitsubishi Tân Bình",
      "Hỗ trợ chi phí đăng ký xe"
    ],
    priceTable: [
      { version: "Mitsubishi Xforce Ultimate (1tone)", price: "705 triệu đ" },
      { version: "Mitsubishi Xforce Premium", price: "680 triệu đ" },
      { version: "Mitsubishi Xforce Exceed", price: "640 triệu đ" },
      { version: "Mitsubishi Xforce GLX", price: "599 triệu đ" }
    ],
    installments: [
      { prepay: "120.000.000", months: 60, rate: "7.5%", monthly: "8.500.000" }
    ],
    overview: {
      title: "Tổng quan Mitsubishi Xforce",
      image: "/images/xforce-overview.jpg",
      content: `
**New Mitsubishi Xforce 2025**

Mitsubishi Xforce 2025 là một mẫu xe SUV cỡ nhỏ thuộc dòng B-SUV tại Việt Nam. Mitsubishi Xforce được Mitsubishi Việt Nam ra mắt chính thức vào tháng 6/2024 và hiện đang là một mẫu gầm cao cỡ nhỏ đang bán chạy nhất tại thị trường Việt Nam, được phân phối trực tiếp bởi Mitsubishi Tân Bình.

**Động cơ & Phiên bản Mitsubishi Xforce**

Mitsubishi Xforce được trang bị khối động cơ xăng 4 xy-lanh 1.5L MIVEC, CVT, Cầu trước, Ngôn ngữ thiết kế Dynamic Shield, 5 Chỗ, Mâm hợp kim 18-inch.

Các phiên bản:
- Mitsubishi Xforce Ultimate
- Mitsubishi Xforce Premium
- Mitsubishi Xforce Exceed
- Mitsubishi Xforce GLX
<b>Thông số kỹ thuật Mitsubishi Xforce</b><br/>
<img src="/images/xforce-specs.jpg" alt="Thông số kỹ thuật Mitsubishi Xforce" style="max-width:600px;width:100%"/>
<br/>
<b>Trang Thiết Bị Mitsubishi Xforce</b><br/>
<img src="/images/xforce-accessory.jpg" alt="Trang thiết bị Xforce" style="max-width:600px;width:100%"/>
      `
    },

    // ----- Phần ngoại thất data-driven (chỉ riêng Xforce mới có) -----
    exteriorSection: {
      title: "NGOẠI THẤT MITSUBISHI XFORCE",
      blocks: [
        {
          subtitle: "Đầu xe",
          desc: "Nhìn từ xa đầu xe Mitsubishi Xforce 2025 trông hiện đại và khỏe khoắn. Nằm giữa trung tâm là cụm lưới tản nhiệt hình khối, kích thước lớn. Mắt cá lăng tạo hình họa tiết lưới xếp tầng tăng thêm chiều sâu thị giác.",
          images: [
            { src: "/images/xforce-front.jpg", alt: "Ngoại thất Mitsubishi Xforce" },
            { src: "/images/xforce-front-detail1.jpg", alt: "Đèn chiếu sáng Mitsubishi Xforce", caption: "Cụm đèn chiếu sáng Mitsubishi Xforce 2024 dạng T-shape kết cấu phân tầng kết hợp với dải LED ban ngày hình chữ L" },
            { src: "/images/xforce-front-detail2.jpg", alt: "Cản trước Mitsubishi Xforce", caption: "Nằm liền kề là cụm đèn chiếu sáng dạng T-shape kết cấu phân tầng. ... Bọc bên ngoài cụm đèn là miếng ốp nhôm to bản mang đến nét thể thao, vững chãi cho xe." }
          ]
        }
      ]
    },
    versions: [
      "Xforce Ultimate",
      "Xforce Premium",
      "Xforce Exceed",
      "Xforce GLX"
    ],
    equipment: [
      {
        title: "Trang Thiết Bị Mitsubishi Xforce",
        image: "/images/xforce-accessory.jpg",
        content: "Bộ phụ kiện chính hãng: Bộ ghế XFORCE, Bộ chắn bùn, Bộ điều khiển khởi động từ xa,..."
      }
    ],
    sections: [
      {
        title: "Nội thất Mitsubishi Xforce",
        blocks: [
          {
            subtitle: "Khoang lái",
            image: "/images/xforce-cabin.png",
            desc: "Không gian rộng rãi, màn hình kép 12.3 inch, vật liệu da cao cấp, hệ thống giải trí Yamaha."
          },
          {
            subtitle: "Khoang hành khách",
            image: "/images/xforce-row2.png",
            desc: "Hàng ghế sau rộng, cửa gió riêng biệt, độ ngả ghế lớn nhất phân khúc."
          }
        ]
      },
      {
        title: "Vận hành Mitsubishi Xforce",
        blocks: [
          {
            subtitle: "",
            image: "/images/xforce-engine.png",
            desc: "Động cơ MIVEC 1.5L, hộp số CVT, 4 chế độ lái, tiết kiệm nhiên liệu tối ưu."
          }
        ]
      },
      {
        title: "An toàn Mitsubishi Xforce",
        blocks: [
          {
            subtitle: "",
            image: "/images/xforce-safety.png",
            desc: "Hệ thống kiểm soát lực kéo AYC, phanh ABS/EBD, cảnh báo điểm mù, cảnh báo phương tiện cắt ngang, 6 túi khí."
          }
        ]
      }
    ],
    specsImage: "/images/xforce-specs.jpg",
    gallery: [
      "/images/xforce-1.png",
      "/images/xforce-2.png",
      "/images/xforce-3.png"
    ]
  },

  // ==== Các xe khác để nguyên, có thể bổ sung exteriorSection nếu cần ====
  {
    slug: "all-new-xpander",
    name: "ALL NEW XPANDER",
    fuel: "6.9L/100Km",
    price: "560,000,000 ₫",
    image: "/images/xpander.png",
    // Không có exteriorSection
  },
  {
    slug: "new-pajero-sport",
    name: "NEW PAJERO SPORT",
    fuel: "8.4L/100Km",
    price: "1,110,000,000 ₫",
    image: "/images/pajero.png",
  },
  {
    slug: "xpander-cross",
    name: "XPANDER CROSS",
    fuel: "6.9L/100Km",
    price: "698,000,000 ₫",
    image: "/images/xpander-cross.png",
  },
  {
    slug: "new-attrage",
    name: "NEW ATTRAGE",
    fuel: "4.42L/100Km",
    price: "380,000,000 ₫",
    image: "/images/attrage.png",
  },
  {
    slug: "new-outlander",
    name: "NEW OUTLANDER",
    fuel: "8.48L/100Km",
    price: "825,000,000 ₫",
    image: "/images/outlander.png",
  },
  {
    slug: "triton-2wd-at-glx",
    name: "TRITON 2WD AT GLX",
    fuel: "7.2L/100Km",
    price: "655,000,000 ₫",
    image: "/images/triton-glx.png",
  },
  {
    slug: "triton-4wd-at-athlete",
    name: "TRITON 4WD AT ATHLETE",
    fuel: "8.6L/100Km",
    price: "924,000,000 ₫",
    image: "/images/triton-athlete.png",
  }
];
export default carData;
