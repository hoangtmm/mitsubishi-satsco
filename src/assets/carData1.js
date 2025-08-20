const carData = [
  {
    slug: "all-new-xforce",
    name: "MITSUBISHI XFORCE",
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
  priceTable: [
    { version: "Mitsubishi Xpander Cross 2025", price: "698 triệu đ" }
  ],
    // ----- TỔNG QUAN XPANDER CROSS 2025 -----
  overviewSection: {
    title: "TỔNG QUAN XPANDER CROSS 2025",
    blocks: [
      {
        subtitle: "Xpander Cross 2025 – Hành trình nâng tầm trải nghiệm",
        // dùng HTML để có chữ xanh gạch chân như ảnh
        html: `
          <p><a href="#" class="text-[#1045a7] underline">Mitsubishi Xpander Cross</a> được ra mắt lần đầu tại thị trường Việt Nam từ năm 2020, biến thể Xpander Cross có nhiệm vụ “chia lửa” về mặt doanh số của mẫu Xpander đang “làm mưa làm gió” trên thị trường xe MPV 7 chỗ gầm cao dành cho gia đình, mặc dù mẫu xe này đang được bán dưới dạng một sản phẩm riêng biệt so với biến thể MPV.</p>
        `
      },
      {
        subtitle: "Hành trình chinh phục thị trường Việt Nam",
        html: `
          <p>Từ 2020 đến nay, Xpander Cross 2025 không ngừng nâng cấp với thiết kế SUV mạnh mẽ, nội thất tiện nghi và động cơ tối ưu. Xpander Cross 2025 mang đến trải nghiệm lái êm ái, linh hoạt, phù hợp cho gia đình và những chuyến đi xa. Với không gian rộng rãi, công nghệ hiện đại, Xpander Cross tiếp tục khẳng định vị thế trong phân khúc MPV lai SUV.</p>
        `,
        // thay ID bằng id video YouTube của bạn
        videoId: "t4P8a_Y2uaM"
      },
      {
        html: `
          <p>Phiên bản nâng cấp giữa vòng đời của <a href="#" class="text-[#1045a7] underline">Mitsubishi Xpander Cross</a> vừa được trình làng với nhiều nâng cấp về thiết kế cũng như trang bị, điều này giúp tạo thêm sức hút cạnh tranh trực tiếp với Suzuki XL7. Ở phiên bản mới, mẫu MPV gầm cao có giá bán khởi điểm 698 triệu đồng, cao hơn đôi chút so với trước.</p>
          <p><strong>Liên hệ Mitsubishi Tân Bình</strong> để nhận ưu đãi tốt nhất hôm nay!</p>
        `
      }
    ]
  },
// ----- NGOẠI THẤT XPANDER CROSS 2025 -----
exteriorSection: {
  title: "NGOẠI THẤT XPANDER CROSS 2025",
  blocks: [
    {
      // Ảnh hero chạy rừng + đoạn dẫn
      desc:
        "Mitsubishi Xpander Cross phiên bản SUV 7 chỗ vẫn trung thành với phong cách Dynamic Shield, phát triển từ nền tảng Xpander tiêu chuẩn nhưng kích thước nhìn hơn cùng gầm xe cao hơn. Một vài chi tiết thiết kế khác biệt khiến Xpander Cross 2024 trông khoẻ khoắn hơn, theo hơi hướng của một chiếc SUV đích thực.",
      images: [
        { src: "/images/xpc-exterior-hero.jpeg", alt: "Xpander Cross chạy địa hình" }
      ]
    },
    {
      subtitle: "Thiết kế đầu xe",
      desc:
        "Ở phần đầu xe, Xpander Cross 2024 facelift tái thiết kế lưới tản nhiệt với nan ngang to bản, sơn đen, nẹp mạ chrome hình chữ X đặc trưng tạo cảm giác mạnh mẽ và nổi bật.",
      images: [
        { src: "/images/xpc-front-close.jpeg", alt: "Cận cảnh đầu xe Xpander Cross 2024", caption: "Cận cảnh đèn trước của Xpander Cross 2024 mới" }
      ]
    },
    {
      // bổ sung mô tả cụm đèn
      desc:
        "Xpander Cross sở hữu đèn định vị ban ngày LED và đèn pha Full-LED thiết kế T-Shape hiện đại; đèn pha có tính năng bật/tắt tự động và điều chỉnh độ cao chùm sáng.",
    },
    {
      subtitle: "Thân xe",
      images: [
        { src: "/images/xpc-side-wide.jpeg", alt: "Thân xe Xpander Cross 2024 trên nền núi" }
      ],
      caption:
        "So sánh với Xpander AT, bản Cross dài hơn 25 mm, rộng hơn 50 mm và cao hơn 20 mm; khoảng sáng gầm tăng 20 mm, tự trọng lớn hơn 25 kg."
    },
    {
      // Mâm 17 inch
      images: [
        { src: "/images/xpc-wheel-17.jpeg", alt: "Mâm 17 inch Xpander Cross" }
      ],
      caption:
        "Mâm xe bản Xpander Cross 2024 thiết kế mới đẹp hơn, kích thước 215/45 R17 (lớn hơn bản Xpander 1.5AT 205/55 R16)."
    },
    {
      // Ốp hông
      images: [
        { src: "/images/xpc-side-moulding.jpeg", alt: "Ốp hông Xpander Cross" }
      ],
      caption: "Hình ảnh hông xe"
    },
    {
      // Ô kính hông/viền chrome
      images: [
        { src: "/images/xpc-side-window.jpeg", alt: "Cửa sổ hông và viền chrome" }
      ],
      caption: "Hình ảnh hông xe"
    },
    {
      // Giá nóc
      images: [
        { src: "/images/xpc-roof-rail.jpeg", alt: "Giá nóc Xpander Cross" }
      ],
      caption: "Xpander Cross 2024 có thêm giá nóc giúp tổng thể khoẻ khoắn hơn."
    },
    {
      subtitle: "Đuôi xe",
      desc:
        "Thiết kế đuôi xe nổi bật với ốp cản sau màu bạc, bao quanh là ốp viền màu đen; cụm đèn hậu giữ thiết kế T-Shape đặc trưng.",
      images: [
        { src: "/images/xpc-rear-bumper.jpeg", alt: "Cản sau Xpander Cross 2024" }
      ]
    },
    {
      // Cận cảnh đèn hậu
      images: [
        { src: "/images/xpc-tail-light.jpeg", alt: "Cận cảnh đèn hậu T-Shape" }
      ]
    }
  ]
},
// ----- NỘI THẤT XPANDER CROSS 2025 -----
interiorSection: {
  title: "NỘI THẤT XPANDER CROSS 2025",
  blocks: [
    {
      // Cabin tổng quan
      desc:
        "Khoang cabin Xpander Cross 2024 xịn xò, trẻ trung hơn hẳn Xpander khi nội thất kết hợp 2 tông màu đen – nâu thể thao. Vô-lăng trợ lực chỉnh điện 4 hướng tích hợp các nút chức năng hỗ trợ lái như chỉnh âm thanh, điện thoại rảnh tay, kiểm soát hành trình Cruise Control.",
      images: [
        { src: "/images/xpc-interior-cabin.jpeg", alt: "Khoang cabin Xpander Cross 2025" }
      ]
    },
    {
      // Hàng ghế giữa + trang bị
      desc:
        "Mitsubishi Xpander Cross với ghế lái bọc da, chỉnh cơ 6 hướng, có thêm móc ghế an toàn dành cho trẻ em (ISOFIX), chìa khóa thông minh khởi động bằng nút bấm. Trung tâm táp-lô là màn hình giải trí cảm ứng 7 inch tương thích Apple CarPlay/Android Auto.",
      images: [
        { src: "/images/xpc-interior-row2.jpeg", alt: "Hàng ghế giữa Xpander Cross" }
      ]
    },
    {
      // Taplo / khoang lái
      desc:
        "Khoang lái bố trí khoa học, tập trung vào người dùng với các tiện ích như điều hòa cơ, hệ thống âm thanh 6 loa, cổng sạc USB ở hộc để đồ trung tâm, ổ cắm điện 12V cho cả 3 hàng ghế; gương chiếu hậu chỉnh/gập điện.",
      images: [
        { src: "/images/xpc-interior-dashboard.jpeg", alt: "Taplo và vô lăng Xpander Cross" }
      ]
    },
    {
      // Gập phẳng linh hoạt
      desc:
        "Hàng ghế linh hoạt giúp mở rộng khoang chứa đồ khi cần, phù hợp cho gia đình và các chuyến đi xa.",
      images: [
        { src: "/images/xpc-interior-fold-flat.jpeg", alt: "Ghế gập phẳng Xpander Cross" }
      ]
    }
  ]
},
// ----- VẬN HÀNH XPANDER CROSS 2025 -----
performanceSection: {
  title: "VẬN HÀNH XPANDER CROSS 2025",
  blocks: [
    {
      html: `
        <p><strong>Mitsubishi Xpander Cross</strong> được mang trong mình một khối động cơ được tinh chỉnh và thiết kế bởi Mitsubishi với tên gọi động cơ Mitsubishi MIVEC. Xe vẫn được trang bị động cơ xăng dung tích 1.5L, cho công suất 105 mã lực và mô-men xoắn cực đại 141 Nm. Xe dùng hộp số tự động 4 cấp kết hợp cùng hệ dẫn động cầu trước. Về hiệu suất, Xpander Cross nhỉnh hơn so với Suzuki XL7 (103 mã lực, 138 Nm), ngoài ra mẫu xe đối thủ cũng chưa được trang bị kiểm soát hành trình.</p>
      `
    },
    {
      images: [
        { src: "/images/xpc-suspension.jpeg", alt: "Hệ thống treo Xpander Cross" }
      ]
    },
    {
      html: `
        <p>Ngoài ra, hệ thống treo được nâng cấp với bộ giảm xóc phía sau trang bị
        xi-lanh lớn, van điều tiết hiệu suất cao; phía trước dùng giảm xóc MacPherson
        tinh chỉnh lại, giúp xe đằm chắc hơn, hạn chế dằn xóc vào khoang cabin,
        đem lại trải nghiệm ổn định và êm ái hơn.</p>
      `
    },
    {
      html: `
        <p>Nâng cấp đáng chú ý khác là <strong>AYC – Active Yaw Control</strong>,
        hệ thống kiểm soát vào cua chủ động. AYC can thiệp phanh/truyền lực để tối ưu lực bám
        và độ ổn định khi ôm cua, chuyển làn gấp hoặc chạy trên mặt đường trơn trượt.</p>
      `
    }
  ]
},
// ----- AN TOÀN XPANDER CROSS 2025 -----
safetySection: {
  title: "AN TOÀN XPANDER CROSS 2025",
  blocks: [
    {
      html: `
        <p>Tại Việt Nam, <b>Mitsubishi Xpander Cross</b> sở hữu khối động cơ 1.5L cho công suất 105 mã lực và mô-men xoắn cực đại 141 Nm. 
        Hệ thống truyền động tối ưu kết hợp nhiều công nghệ an toàn chủ động.</p>
      `
    },
    {
      subtitle: "Trang bị an toàn",
      list: [
        "Hệ thống phanh ABS",
        "Phân phối lực phanh điện tử (EBD)",
        "Hỗ trợ phanh khẩn cấp (BA)",
        "Cân bằng điện tử (ASC)",
        "Đèn cảnh báo phanh khẩn cấp (ESS)",
        "Kiểm soát lực kéo (TCL)",
        "Hỗ trợ khởi hành ngang dốc (HSA)",
        "Hệ thống kiểm soát vào cua chủ động (AYC)"
      ]
    },
    {
      images: [
        { src: "/images/xpc-body-structure.jpeg", alt: "Khung thân xe thép siêu cường" }
      ]
    },
    {
      images: [{ src: "/images/xpc-hsa.jpeg", alt: "So sánh có/không HSA" }]
    },
    {
      images: [{ src: "/images/xpc-ba.jpeg", alt: "So sánh có/không BA" }]
    },
    {
      images: [{ src: "/images/xpc-asc.jpeg", alt: "So sánh có/không ASC" }]
    },
    {
      images: [{ src: "/images/xpc-abs.jpeg", alt: "So sánh có/không ABS" }]
    },
    {
      images: [{ src: "/images/xpc-ayc.jpeg", alt: "" }]
    }
  ]
},
// ----- THÔNG SỐ XPANDER CROSS 2025 -----
specsSection: {
  title: "THÔNG SỐ XPANDER CROSS 2025",
  blocks: [
    {
      subtitle: "Xpander Cross 2024",
      table: [
        ["Nguồn gốc", "Nhập khẩu Indonesia"],
        ["Chỗ ngồi", "7 chỗ"],
        ["Kích thước DxRxC (mm)", "4.500 x 1.800 x 1.750"],
        ["Chiều dài cơ sở", "2.775 mm"],
        ["Khoảng sáng gầm", "225 mm"],
        ["Bán kính vòng quay", "5,2 m"],
        ["Tự trọng", "1.275 kg"],
        ["Động cơ", "Xăng; 1.5L MIVEC; i4 DOHC"],
        ["Dung tích động cơ", "1.499 cc"],
        ["Công suất cực đại", "104 Ps / 6.000 rpm"],
        ["Mô-men xoắn cực đại", "141 Nm / 4.000 rpm"],
        ["Hộp số", "4AT"],
        ["Dẫn động", "FWD"],
        ["Mức tiêu hao nhiên liệu", "6,2–6,3 l/100 km"],
        ["Lốp xe", "215/45 R17"],
        ["Bình xăng", "45 L"]
      ]
    }
  ]
},
// ----- HÌNH ẢNH XPANDER CROSS 2025 -----
gallerySection: {
  title: "HÌNH ẢNH XPANDER CROSS 2025",
  blocks: [
    {
      images: [
        { src: "/images/xpc-gallery-1.jpg", alt: "Xpander Cross 2025 ngoài trời" }
      ]
    }
  ]
},

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
