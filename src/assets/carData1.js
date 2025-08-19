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
        },
        {
          subtitle: "Thân xe",
          desc: "Nhìn từ bên hông, thân xe Mitsubishi Xforce 2024 có form dáng cân đối, các đường gân dập nổi chạy dọc thân mang phong cách năng động, thể thao. Ốp viền hốc bánh và ốp sườn màu đen tăng vẻ khỏe khoắn. Gương chiếu hậu gập/chỉnh điện tích hợp báo rẽ. Mâm hợp kim 18 inch thiết kế mạnh mẽ.",
          images: [
            { src: "/images/xforce-front1.jpg", alt: "Thân xe Mitsubishi Xforce" }, // ảnh lớn như hình bạn gửi
            { src: "/images/xforce-side-detail1.jpg", alt: "Viền hốc bánh và ốp sườn", caption: "Ốp nhựa đen quanh vè bánh và sườn xe tạo cảm giác vững chãi, chống bám bẩn tốt." },
          ]
        },
        {
          subtitle: "Đuôi xe",
          desc:
            "Đuôi xe Mitsubishi Xforce 2024 mang phong cách quen thuộc. Thiết kế cụm đèn hậu cách điệu dạng T‑shape tương tự như mặt trước. Cản sau dùng ốp nhựa đen nhám tạo hình khỏe khoắn, tổng thể cho cảm giác cứng cáp và bề thế.",
          images: [
            { src: "/images/xforce-rear.jpg", alt: "Đuôi xe Mitsubishi Xforce" },

          ]
        }
      ]
    },
        // ----- Phần nội thất data-driven (chỉ riêng Xforce mới có) -----
    interiorSection: {
      title: "NỘI THẤT MITSUBISHI XFORCE",
      blocks: [
        {
          subtitle: "",
          desc: "Thiết kế bên trong Mitsubishi Xforce 2025 mở rộng theo phương ngang, giúp tăng tầm quan sát phía trước. Trang bị tiện nghi, bố trí khoa học; các chi tiết được chăm chút tỉ mỉ tạo cảm giác khá sang trọng. Đặc biệt Xforce là mẫu xe đầu tiên sử dụng chất liệu vải mélange trang trí mặt táp-lô và tappi cửa.",
          images: [
            { src: "/images/xforce-interior-dash.jpg", alt: "Nội thất tổng quan Xforce" }
          ]
        },
        {
          subtitle: "Ghế ngồi và khoang hành lý",
          desc: "Mitsubishi Xforce 2024 có cấu hình 5 chỗ, trục cơ sở 2.650 mm cho không gian rộng rãi ở cả hai hàng ghế. Ghế bọc da pha nỉ phối màu trẻ trung, ghế trước ôm thân người có chỉnh lưng; hàng ghế sau có bệ tỳ tay, tựa lưng phẳng, lưng ghế điều chỉnh 8 cấp độ. Khoang hành lý gập linh hoạt 40/20/40.",
          images: [
            { src: "/images/xforce-seats.jpg", alt: "Hàng ghế Xforce" }
          ]
        },
        {
          subtitle: "Khu vực lái",
          desc: "Vô lăng 3 chấu bọc da vát đáy D-cut, tích hợp phím chức năng. Cụm đồng hồ 8 inch kỹ thuật số, khởi động nút bấm, cần số điện tử. Bảng đồng hồ hiển thị đầy đủ thông tin, giao diện trực quan.",
          images: [
            { src: "/images/xforce-driver.jpg", alt: "Khoang lái Xforce" }
          ]
        },
        {
          subtitle: "Tiện nghi",
          desc: "Màn hình trung tâm 12.3 inch nối liền cụm đồng hồ. Hệ thống âm thanh Dynamic Sound Yamaha Premium với loa cao cấp, tự động điều chỉnh chất lượng âm thanh theo tốc độ và mặt đường.",
          images: [
            { src: "/images/xforce-yamaha-1.jpg", alt: "Loa Yamaha cột A" },
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
   
      // ----- Phần vận hành (data-driven) -----
    performanceSection: {
      title: "VẬN HÀNH MITSUBISHI XFORCE",
      blocks: [
        {
          subtitle: "Động cơ & Hệ truyền động",
          desc: "Mitsubishi Xforce 2025 sử dụng động cơ MIVEC 1.5L cho công suất tối đa 105 mã lực, mô men xoắn cực đại 141Nm. Hộp số tự động vô cấp CVT, hệ dẫn động cầu trước.",
          images: [
            { src: "/images/xforce-engine.jpg", alt: "Động cơ Mitsubishi Xforce" }
          ]
        },
        {
          subtitle: "Thông số vận hành",
          table: [
            ["Động cơ", "1.5 MIVEC"],
            ["Công suất cực đại", "105/6.000"],
            ["Mô men xoắn cực đại", "141/4.000"],
            ["Hộp số", "CVT"],
            ["Dẫn động", "Cầu trước"],
            ["Hệ thống treo", "MacPherson / Dầm xoắn"],
            ["Phanh", "Đĩa"]
          ]
        }
      ]
    },

    // ----- Phần an toàn -----
    safetySection: {
      title: "AN TOÀN MITSUBISHI XFORCE",
      blocks: [
        {
          subtitle: "Trang bị an toàn",
          desc: "Hệ thống an toàn trên Mitsubishi Xforce được đánh giá khá tốt. Xe có đầy đủ các tính năng tiên tiến như kiểm soát hành trình thích ứng, cảnh báo điểm mù, cảnh báo phương tiện cắt ngang phía sau, cảnh báo và giảm thiểu va chạm trước, đèn pha tự động, hỗ trợ chuyển làn…",
          images: [
            { src: "/images/xforce-safety.png", alt: "An toàn Mitsubishi Xforce" }
          ],
          list: [
            "6 túi khí",
            "Phanh ABS, EBD, BA",
            "Cảnh báo điểm mù",
            "Kiểm soát hành trình thích ứng",
            "Cảnh báo va chạm trước / sau",
            "Hỗ trợ khởi hành ngang dốc",
            "Kiểm soát lực kéo"
          ]
        }
      ]
    },

    // ----- Phần thông số kỹ thuật -----
    specsSection: {
      title: "THÔNG SỐ KỸ THUẬT MITSUBISHI XFORCE",
      blocks: [
        {
          subtitle: "",
          list: [
            "Kích thước: 4.390 x 1.810 x 1.660 mm",
            "Chiều dài cơ sở: 2.650 mm",
            "Hộp số tự động vô cấp CVT",
            "Đèn chiếu sáng LED T-Shape",
            "Phanh tay điện tử & Auto Hold",
            "Cửa sổ trời toàn cảnh",
            "USB-A & USB-C cho cả 2 hàng ghế",
            "Màn hình cảm ứng 12.3 inch hỗ trợ Android Auto & Apple CarPlay",
            "Âm thanh 8 loa Dynamic Sound Yamaha"
          ]
        }
      ]
    },

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
