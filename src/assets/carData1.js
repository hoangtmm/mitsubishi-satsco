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
    name: "MITSUBISHI XPANDER 2025",
    fuel: "6.9L/100Km",
    price: "560,000,000 ₫",
    image: "/images/xpander.png",
    priceTable: [
      { version: "NEW XPANDER MT", price: "560 triệu đ" },
      { version: "NEW XPANDER AT", price: "598 triệu đ" },
      { version: "NEW XPANDER AT Premium", price: "658 triệu đ" }
    ],
    // === TỔNG QUAN XPANDER 2025 ===
    overviewSection: {
      title: "TỔNG QUAN MITSUBISHI XPANDER 2025",
      blocks: [
        {
          subtitle: "MITSUBISHI XPANDER 2025",
          html: `
        <p>Tiếp bước thành công của phiên bản tiền nhiệm với doanh số ấn tượng, <b>Mitsubishi Tân Bình</b> chính thức giới thiệu Xpander hoàn toàn mới 2025 cùng nhiều nâng cấp giá trị cho gia đình Việt.</p>
        <p>Xpander 2025 được tinh chỉnh thiết kế, trang bị và khả năng vận hành để mang lại cảm giác lái êm ái, tiết kiệm và thực dụng hơn cho mọi nhu cầu sử dụng hằng ngày.</p>
      `
        },
        {
          subtitle: "Mitsubishi Xpander 2025 có gì nổi bật?",
          html: `
        <p>Xpander 2025 sở hữu hơn 20 nâng cấp: thiết kế Crossover khoẻ khoắn, đèn chiếu sáng trước LED thấu kính T-Shape, mâm 17-inch, gầm cao 225 mm; nội thất rộng rãi với các tiện nghi thực dụng và vật liệu bền bỉ.</p>
        <p class="text-red-600 italic font-semibold">Giá Mitsubishi Xpander tốt nhất tại khu vực TP.HCM – Hotline: 094 7700 923</p>
        <p>Khung gầm vững chắc, hệ treo tối ưu cho đường đô thị và đường dài; khoang hành lý linh hoạt nhờ ghế gập phẳng linh hoạt 60:40/50:50.</p>
        <p>Khoang nội thất tông màu hiện đại, táp-lô thiết kế “Horizontal Axis”, màn hình trung tâm mới, nhiều hộc để đồ; vô-lăng đa chức năng; nhiều cổng sạc USB cho cả 3 hàng ghế.</p>
        <p>Hệ thống an toàn chủ động đầy đủ như ABS/EBD/BA, cân bằng điện tử, hỗ trợ khởi hành ngang dốc… mang lại sự yên tâm cho cả gia đình.</p>
      `
        },
        {
          subtitle: "Mua Mitsubishi Xpander giá tốt nhất ở đâu?",
          html: `
        <p>Quý khách mua xe tại <b>Mitsubishi Tân Bình</b> nhận ưu đãi hấp dẫn, hỗ trợ trả góp, tặng phụ kiện chính hãng và bảo hiểm. Liên hệ để được tư vấn chi tiết và lái thử thực tế.</p>
      `
        }
      ]
    },
    // ----- NGOẠI THẤT XPANDER 2025 -----
    exteriorSection: {
      title: "NGOẠI THẤT MITSUBISHI XPANDER 2025",
      blocks: [
        {
          // Ảnh hero + đoạn mô tả mở đầu
          desc:
            "Mitsubishi Xpander 2024 sở hữu kích thước của hai thanh mạ chrome chữ X ở mặt trước to bản, sắc sảo, nhấn mạnh nét hiện đại của thiết kế Dynamic Shield. Cản trước trải rộng theo phương ngang giúp xe cao ráo và mạnh mẽ. Đèn chiếu sáng phía trước dạng T-Shape với công nghệ LED thấu kính cho khả năng chiếu sáng tốt hơn. Đèn định vị mới tích hợp đèn báo rẽ hoàn thiện vẻ ngoài trẻ trung của phần đầu xe.",
          images: [
            { src: "/images/xpander-ext-hero.jpg", alt: "Ngoại thất Mitsubishi Xpander 2025" }
          ]
        },
        {
          // Ảnh xe đỗ trong khu dân cư (bài nói về mâm 17-inch)
          desc:
            "Mâm bánh xe 2 tông màu được nâng cấp lên 17-inch, thiết kế không viền giúp bánh xe trông thể thao và bắt mắt. Sự gia tăng kích thước kết hợp với góc tiếp cận và góc thoát tốt giúp xe dễ dàng vượt qua các địa hình phức tạp.",
          images: [
            { src: "/images/xpander-street.jpg", alt: "Xpander 2025 đỗ phố, mâm 17 inch" }
          ]
        },
        {
          // Cận cảnh cụm đèn trước T-Shape
          desc:
            "Đồng nhất thiết kế với đèn trước, đèn sau dạng T-Shape trở thành điểm nhấn tinh tế cho phần đuôi xe. Bên cạnh đó, cửa cốp dày dặn, cản sau mở rộng giúp ngoại thất xe cứng cáp, mạnh mẽ toàn diện.",
          images: [
            { src: "/images/xpander-frontclose.jpg", alt: "Cận cảnh đèn trước Xpander 2025" }
          ]
        },
        {
          // Ảnh hông/đuôi xe (tổng thể kích thước)
          desc:
            "Tổng thể, Xpander 2024 mang phong cách Crossover khoẻ khoắn với chiều dài thân xe 4.595 mm, tăng hơn 120 mm so với phiên bản trước (bao gồm 75 mm ở đầu xe và 45 mm ở đuôi xe). Chiều cao xe tăng lên 20 mm.",
          images: [
            { src: "/images/xpander-rear-park.jpg", alt: "Hông và đuôi xe Xpander 2025" }
          ]
        }
      ]
    },
    // ----- NỘI THẤT XPANDER 2025 -----
    interiorSection: {
      title: "NỘI THẤT MITSUBISHI XPANDER 2025",
      blocks: [
        {
          html: `
        <p>Xpander chinh phục khách hàng với khoang nội thất hoàn toàn mới và rộng rãi hàng đầu phân khúc, sang trọng đi cùng tính ứng dụng cao. Dựa trên triết lý “Omotenashi” – biểu trưng cho nghệ thuật chăm sóc khách hàng của người Nhật, Xpander hướng đến đáp ứng trọn vẹn những nhu cầu thiết thực từ khách hàng.</p>
      `,
          images: [
            { src: "/images/xp-interior-dashboard.jpg", alt: "Khoang lái Xpander 2025" }
          ]
        },
        {
          html: `
        <p>Nội thất Mitsubishi Xpander 2024* hoàn toàn mới theo triết lý thiết kế “Horizontal Axis” – nhận diện mới nhất của Mitsubishi cho thế hệ sản phẩm tương lai với bề mặt táp-lô, bảng điều khiển trung tâm trải rộng theo phương ngang. Sự kết hợp hài hòa giữa Horizontal Axis và chất liệu cao cấp tạo nên không gian nội thất xe rộng rãi, sang trọng vượt trội, mang lại sự thoải mái cho cả gia đình.</p>
      `,
          images: [
            { src: "/images/xp-interior-cabin.jpg", alt: "Không gian cabin 3 hàng ghế Xpander 2025" }
          ]
        },
        {
          html: `
        <p>Nội thất Xpander 2024 gồm 2 tông màu đen – nâu sang trọng (AT Premium) và đen – xanh navy thể thao (Xpander Cross). Không chỉ thiết kế tinh tế và đẹp mắt, vật liệu da mềm cùng với đường chỉ may thật trang trí cho những vị trí như ốp cửa, tựa tay trên cửa hay bệ tỳ tay ghế lái tạo điểm nhấn cao cấp cho xe. Các chi tiết của bảng điều khiển cũng được trau chuốt để tạo nên sự tinh tế thống nhất.</p>
      `
        },
        {
          images: [
            { src: "/images/xp-interior-ac-panel.jpg", alt: "Cụm điều hòa và chức năng Max Cool" }
          ],
          html: `
        <p>Chức năng Max Cool lần đầu tiên xuất hiện trên cụm điều khiển điều hòa kỹ thuật số được thiết kế mới, tinh xảo và dễ thao tác hơn trên Xpander 2024. Khi bật chế độ Max Cool, điều hòa xe ngay lập tức chuyển sang chế độ mức gió lớn nhất và nhiệt độ thấp nhất để làm mát không gian nội thất thật nhanh chóng. Cụm điều hòa hàng ghế sau cũng được chỉnh với nút điều khiển màu bạc sang trọng và các cạnh hướng gió sơn màu mới, đẹp mắt hơn.</p>
        <p>Phanh tay điện tử tự động (EPB) và chức năng Giữ phanh tạm thời (Auto Hold) lần đầu tiên xuất hiện trên Xpander 2024 tạo nên không gian thuận tiện, sang trọng, gọn gàng và an toàn hơn khi lái xe.</p>
      `
        },
        {
          images: [
            { src: "/images/xp-interior-epb.jpg", alt: "Cụm EPB & Auto Hold Xpander 2025" }
          ],
          html: `
        <p>Tiện nghi cho mọi vị trí ngồi trên xe cũng được chú trọng. Tựa tay của hàng ghế sau được bổ sung thêm hộc để cốc tiện dụng. Hàng ghế trước trang bị bệ tì tay tích hợp ngăn chứa khăn giấy và có thể chứa được 4 chai nước 600 ml, phía sau là 2 cổng USB bao gồm 1 cổng USB Type-C và 1 cổng USB Type-A tương thích sạc cho tất cả các thiết bị điện tử di động hiện đại.</p>
        <p>7 chỗ ngồi với 7 chế độ sắp xếp ghế khác nhau theo từng cách gập của hàng ghế thứ 2 và hàng ghế thứ 3. Nội thất rộng rãi của Mitsubishi Xpander có thể thay đổi không gian linh hoạt đáp ứng tối đa sự thoải mái khi di chuyển của gia đình.</p>
      `
        },
        {
          images: [
            { src: "/images/xp-interior-screen.jpg", alt: "Màn hình trung tâm hỗ trợ Apple CarPlay/Android Auto" }
          ],
          html: `
        <p>Màn hình giải trí cảm ứng 9-inch cho chất lượng hiển thị cao cấp, âm thanh vượt trội có khả năng kết nối Apple CarPlay/Android Auto, Bluetooth 5.0, USB, cùng tính năng điều khiển bằng cử chỉ mang lại những trải nghiệm công nghệ thú vị tới người dùng.</p>
        <p>Mặt đồng hồ tốc độ và đồ hoạ hiển thị xe khi khởi động cũng được tái thiết kế theo phong cách hiện đại, tinh tế hơn so với thế hệ trước.</p>
      `
        }
      ]
    },
    // Thêm vào object "all-new-xpander"
    performanceSection: {
      title: "VẬN HÀNH MITSUBISHI XPANDER 2025",
      blocks: [
        {
          subtitle: "",
          desc:
            "Vô lăng 3 chấu được thiết kế mới đem lại cảm giác cầm nắm tự tin hơn, hỗ trợ đánh lái chính xác trong đô thị và đường dài. Hệ thống treo được cải tiến giúp điều khiển và vận hành êm ái trên nhiều mặt đường: kích thước phuộc, van bên trong phuộc, lò xo phuộc trước và phuộc sau đều được tinh chỉnh để tăng cứng vững của thân xe. Xpander 2025 vẫn đảm bảo sự yên tĩnh bên trong khoang lái nhờ tối ưu vật liệu cách âm và hấp thụ tiếng ồn.",
          images: [
            { src: "/images/xp-perf-suspension.jpg", alt: "Hệ thống treo Xpander 2025" }
          ]
        },
        {
          desc:
            "Khoảng sáng gầm của Xpander đạt 225 mm, giúp tự tin vượt qua ổ gà, đường ngập nước nhẹ và các gờ giảm tốc. Khả năng lội nước đến khoảng 400 mm và góc tiếp cận/thoát tốt giúp chiếc MPV vận hành linh hoạt, êm ái trong nhiều điều kiện thực tế.",
        },
        {
          subtitle: "",
          desc:
            "Khung xe RISE sử dụng thép cường lực độ bền cao giúp thân xe vững chắc, giảm biến dạng khi va chạm, đồng thời nâng cao độ ổn định khi vào cua và ở tốc độ cao.",
          images: [
            { src: "/images/xp-perf-rise.jpg", alt: "Khung gầm RISE tăng độ vững chắc" }
          ]
        }
      ]
    },
    // --- AN TOÀN ---
    safetySection: {
      title: "AN TOÀN MITSUBISHI XPANDER 2025",
      blocks: [
        {
          list: [
            "Hệ thống phanh an toàn (ABS – EBD): chống bó cứng phanh & phân phối lực phanh điện tử.",
            "Hỗ trợ phanh khẩn cấp (BA).",
            "Cân bằng điện tử (ASC) giúp giảm hiện tượng mất lái.",
            "Kiểm soát lực kéo (TCL).",
            "Hỗ trợ khởi hành ngang dốc (HSA).",
            "Cảnh báo phanh khẩn cấp (ESS).",
            "Camera lùi: quan sát & lưu xe an toàn hơn."
          ],
        }
      ]
    },

    // --- THÔNG SỐ ---
    specsSection: {
      title: "THÔNG SỐ MITSUBISHI XPANDER 2025",
      blocks: [
        {
          table: [
            ["Kích thước DxRxC", "4475 x 1750 x 1700 mm"],
            ["Chiều dài cơ sở", "2775 mm"],
            ["Khoảng sáng gầm", "205 mm"],
            ["Động cơ", "Xăng 1.5L MIVEC"],
            ["Dung tích", "1499 cc"],
            ["Công suất/Mô-men xoắn", "≈102 mã lực / 141 Nm"],
            ["Hộp số", "Số sàn 5 cấp (MT) / Tự động 4 cấp (AT)"],
            ["Dẫn động", "Cầu trước"],
            ["Lốp xe", "205/55R16"],
            ["Bình xăng", "45 L"],
            ["Số chỗ ngồi", "07"]
          ]
        }
      ]
    },

    // --- HÌNH ẢNH (carousel) ---
    images: [
      { src: "/images/xp-interior-dashboard.jpg", alt: "Khoang lái Xpander 2025" }
    ]

  },
  {
    slug: "new-pajero-sport",
    name: "MITSUBISHI PAJERO SPORT",
    fuel: "8.4L/100Km",
    price: "1,110,000,000 ₫",
    image: "/images/pajero.png",
    // ===== GIÁ XE (thêm mới) =====
    priceTable: [
      { version: "PAJERO SPORT Diesel 4x2 AT 2022", price: "1,130 tỷ đ" },
      { version: "PAJERO SPORT Diesel 4x4 AT 2021", price: "1,365 tỷ đ" }
    ],
    // ===== TỔNG QUAN =====
    overviewSection: {
      title: "TỔNG QUAN MITSUBISHI PAJERO SPORT",
      blocks: [
        {
          html: `
          <p>Mitsubishi Pajero Sport chính thức được giới thiệu tới người tiêu dùng Việt Nam với nhiều tiện nghi cao cấp và tính năng an toàn vượt trội, xe được bán ra theo 2 phiên bản máy dầu 4x2AT và 4x4AT.</p>
          <p>Kế thừa thế mạnh truyền thống về khả năng vận hành đỉnh cao, nhằm tiếp tục đồng hành cùng khách hàng trên hành trình chinh phục, trải nghiệm những chặng đường mới, Mitsubishi Pajero Sport mới được nâng tầm với 22 thay đổi đáng giá từ thiết kế cho đến tiện nghi tiên tiến, đi cùng với đó là hệ thống an toàn MITSUBISHI e-Assist thông minh vượt trội.</p>
        `,
          images: [
            // đổi đường dẫn ảnh cho khớp dự án của bạn
            { src: "/images/pajero-overview-hero.jpg", alt: "Mitsubishi Pajero Sport" }
          ]
        },
        {
          html: `
          <p>Với thông điệp “Ride New Life – Trải nghiệm phong cách sống mới” – Mitsubishi Pajero Sport mới được sinh ra để đáp ứng sự kì vọng của khách hàng về một mẫu xe SUV vận hành linh hoạt ở nhiều loại địa hình khác nhau nhưng vẫn mang đến sự thoải mái, tiện nghi và khả năng bảo vệ tối ưu với hàng loạt công nghệ an toàn tiên tiến, thông minh nổi bật trong phân khúc.</p>
        `
        }
      ]
    },
    // Trong object có slug: "new-pajero-sport"
    exteriorSection: {
      title: "NGOẠI THẤT MITSUBISHI PAJERO SPORT 2025",
      blocks: [
        {
          // Mở đầu + ảnh tổng thể
          desc:
            "Khoác lên mình diện mạo mới với ngôn ngữ thiết kế Dynamic Shield thế hệ thứ hai, những nâng cấp về ngoại thất trên Mitsubishi Pajero Sport tạo nên tổng thể hài hòa, cá tính; một phong thái lịch lãm và ấn tượng hơn:",
          images: [
            { src: "/images/pajero-ext-1.jpg", alt: "Ngoại thất Mitsubishi Pajero Sport - tổng thể" }
          ]
        },
        {
          // Thông số kích thước + mâm 18 inch
          desc:
            "Pajero Sport mới đậm chất SUV việt dã và mạnh mẽ với kích thước tổng thể là 4,825 x 1,815 x 1,835 (mm). Chiều dài cơ sở lên tới 2,800mm mang đến một không gian rộng rãi cho cả 3 hàng ghế, mâm xe hợp kim đa chấu thiết kế mới 18 inches 2 tông màu đem lại cảm giác mạnh mẽ, thể thao.",
          images: [
            { src: "/images/pajero-ext-2.jpg", alt: "Pajero Sport nhìn ngang, mâm 18 inch 2 tông màu" }
          ]
        },
        {
          // Đầu xe + Bi-LED
          desc:
            "Phần đầu xe nổi bật với mặt ca lăng chữ X, hốc đèn 2 bên khoét sâu, bên trên là đèn chạy LED ban ngày và đèn pha nối liền bằng những thanh mạ bạc, giúp tăng thêm vẻ cứng cáp và nam tính cho Pajero Sport. Lưới tản nhiệt phía trước được thiết kế mới với 3 thanh ngang mạ bạc cao cấp làm tăng thêm vẻ mạnh mẽ, thể thao, mở rộng từ nắp ca-pô xuống giúp xe có khả năng làm mát động cơ tốt hơn. Đặc biệt, Pajero Sport mới được trang bị đèn chiếu sáng phía trước công nghệ Bi-LED hiện đại tăng hiệu quả chiếu sáng.",
          images: [
            { src: "/images/pajero-ext-3.jpg", alt: "Đầu xe Pajero Sport với cụm đèn Bi-LED" }
          ]
        },
        {
          // Hệ thống rửa đèn – đoạn chữ riêng, không bỏ chữ
          desc:
            "Hệ thống rửa đèn chiếu sáng được trang bị trên Pajero Sport sẽ giúp loại bỏ bụi bẩn và bùn đất bám trên đèn, từ đó duy trì hiệu quả chiếu sáng tối đa, giúp người lái có khả năng quan sát tốt nhất, đảm bảo an toàn."
        },
        {
          // Đuôi xe + đèn hậu LED + vây cá + cánh lướt gió
          desc:
            "Cụm đèn hậu với thiết kế mới đẹp mắt tích hợp công nghệ LED giúp tăng thêm vẻ cuốn hút và nhận diện đặc trưng cho Pajero Sport. Đặc biệt, Pajero Sport mới được trang bị thêm ăng-ten vây cá hiện đại và cánh lướt gió thể thao thiết kế mới mang lại sự hài hòa và hiện đại.",
          images: [
            { src: "/images/pajero-ext-4.jpg", alt: "Đuôi xe Pajero Sport với đèn hậu LED và vây cá" }
          ]
        },
        {
          // Khoảng sáng gầm + bán kính quay vòng
          desc:
            "Hệ thống treo vững chãi kết hợp khoảng sáng gầm xe cao 218mm cho phép xe dễ dàng vượt qua những địa hình khó. Trong khi đó, bán kính quay vòng tối thiểu 5,6m, nhỏ nhất trong phân khúc cũng là một điểm cộng đáng kể; bán kính quay vòng nhỏ giúp xe linh hoạt hơn khi di chuyển trong nội thành chật hẹp.",
          images: [
            { src: "/images/pajero-ext-5.jpg", alt: "Pajero Sport nhìn sau, thể hiện khoảng sáng gầm" }
          ]
        }
      ]
    },
    // Thêm vào object của NEW PAJERO SPORT trong carData1
    interiorSection: {
      title: "NỘI THẤT MITSUBISHI PAJERO SPORT",
      blocks: [
        {
          desc:
            "Triết lý 'Omotenashi' lấy khách hàng làm trung tâm được MITSUBISHI MOTORS ứng dụng trong thiết kế nội thất của PAJERO SPORT 2020 với những tính năng tiện ích cao cấp, thông minh nhằm mang đến những trải nghiệm ưu việt, thoải mái nhất cho khách hàng. Tổng thể khoang lái đầy ấn tượng với công nghệ hiện đại tiên tiến, nội thất Pajero Sport sang trọng nhưng không kém phần tinh tế, thanh lịch và hài hòa.",
          images: [
            { src: "/images/pjs-interior-1.jpg", alt: "Khoang lái Pajero Sport" }
          ]
        },
        {
          html: `
        <p>- Nội thất bọc da cao cấp, ghế lái và ghế hành khách phía trước điều chỉnh điện 8 hướng giúp giảm bớt sự mệt mỏi trong những chuyến đi dài.</p>
        <p>- Bảng đồng hồ kỹ thuật số LCD được trang bị trên PAJERO SPORT 2020 có kích thước lớn lên đến 8 inches với 3 chế độ hiển thị thông tin hành trình, không những giúp người lái có thể dễ dàng quan sát các thông tin mà còn cho phép tùy chỉnh các dạng hiển thị khác nhau tùy theo nhu cầu và sở thích của người lái.</p>
      `
        },
        {
          images: [
            { src: "/images/pjs-interior-2.jpg", alt: "Màn hình giải trí Pajero Sport" }
          ],
          html: `
        <p>- Màn hình giải trí 8-inches với giao diện thân thiện cùng khả năng kết nối nhiều giao thức khác nhau như: Android Auto™ và Apple CarPlay™ mang đến khả năng giải trí không giới hạn. Ngoài ra, màn hình này còn có thể kết nối và cho phép hiển thị thông tin đến màn hình đồng hồ kỹ thuật số giúp người lái có thể quan sát các thông tin dễ dàng, tăng khả năng tập trung khi điều khiển xe. Bên cạnh đó, vô lăng tích hợp nút điều chỉnh đa thông tin, âm thanh, đàm thoại rảnh tay và ra lệnh bằng giọng nói, người dùng có thể dễ dàng nghe nhạc và tiện lợi hơn khi lái xe.</p>
      `
        },
        {
          images: [
            { src: "/images/pjs-interior-3.jpg", alt: "Cửa sổ trời & điều hòa" }
          ],
          html: `
        <p>- Hệ thống điều hòa tự động 2 vùng độc lập, với 2 giàn lạnh tích hợp cửa gió điều hòa cho hàng ghế thứ hai và hàng ghế thứ ba, phù hợp với điều kiện khí hậu ở Việt Nam. Ngoài ra, xe còn được trang bị chức năng làm sạch không khí Nano-e giúp mang lại không khí trong lành cho tất cả mọi người trong suốt hành trình.</p>
        <p>- Gương chiếu hậu chống chói tự động, giúp hạn chế ánh sáng phản xạ từ gương hậu chiếu tới tài xế, ngăn ngừa hiện tượng chói mắt từ đèn pha của xe phía sau. Cửa sổ trời hiện đại mang đến những trải nghiệm thú vị cùng thiên nhiên tươi đẹp trong suốt hành trình.</p>
        <p>- Camera toàn cảnh 360, hỗ trợ người lái dễ dàng quan sát trong các tình huống lùi, dừng và đỗ xe hoặc di chuyển trên đường đô thị đông đúc.</p>
        <p>- Triết lý 'Omotenashi' còn có thể dễ dàng nhận thấy trên Pajero Sport 2020 thông qua tính năng đóng mở cốp sau bằng điện và đá cốp thông minh. Đặc biệt, khác với các mẫu xe khác, vốn chỉ trang bị 1 cảm biến đá cốp đặt ngay giữa cản sau vốn gây ra đôi chút phiền toái trong thao tác đóng mở cốp, Pajero Sport 2020 được trang bị đến 2 cảm biến đá cốp đặt ở 2 góc của cản sau, giúp cho thao tác đã cốp dễ dàng và thuận tiện hơn.</p>
      `
        },
        {
          images: [
            { src: "/images/pjs-interior-4.jpg", alt: "Ghế ngồi Pajero Sport" }
          ],
          html: `
        <p>- Không những vậy, Mitsubishi Pajero Sport 2020 còn mang đến sự tiện dụng cao và đẳng cấp cho khách hàng khi lần đầu tiên được trang bị ứng dụng điều khiển từ xa MITSUBISHI thông qua điện thoại thông minh, có thể hoạt động trên các điện thoại thông minh với hai hệ điều hành Android™ và iOS™ và đồng hồ thông minh Apple Watch™. Ứng dụng giúp người dùng có thể tìm vị trí xe trong bãi đậu xe, mở/đóng cốp từ xa một cách dễ dàng hay đặt trạng thái chờ mở cốp giúp việc mở cốp thuận tiện hơn dù người cầm chìa khóa vẫn đang đứng cách xa xe, ngoài ra ứng dụng còn có thể hiển thị các thông tin tiết kiệm nhiên liệu, lượng nhiên liệu và nhắc nhở trạng thái của xe: người lái quên khóa cửa xe hay kính cửa sổ chưa được đóng kín…</p>
      `
        },
        {
          images: [
            { src: "/images/pjs-interior-5.jpg", alt: "Khoang lái & tiện nghi hỗ trợ lái" }
          ],
          html: `
        <p>- Đặc biệt, Mitsubishi Pajero Sport 2020 được tích hợp thêm tính năng phanh tay điện tử tự động và chế độ giữ phanh tự động, giúp người lái nhàn nhã hơn trong quá trình vận hành. Các tiện nghi khác có thể kể đến như nút bấm khởi động, cảm biến bật tắt đèn chiếu sáng tự động, cảm biến gạt mưa tự động, tự động điều chỉnh độ cao đèn chiếu sáng… tất cả đều góp phần mang đến một trải nghiệm đầy tiện dụng và đẳng cấp cho các khách hàng.</p>
      `
        }
      ]
    },
    performanceSection: {
      title: "VẬN HÀNH MITSUBISHI PAJERO SPORT 2025",
      blocks: [
        {
          desc:
            "Khả năng vận hành mạnh mẽ luôn là một trong những ưu điểm vượt trội khi nhắc đến Pajero Sport, mẫu xe mang trong mình “Mã gen SUV” hay còn được gọi là “Chất-MITSUBISHI” vốn đã được minh chứng qua những đường đua Rally khắc nghiệt nhất hành tinh.\n\nPajero Sport mới sử dụng khối động cơ với công nghệ điều khiển van biến thiên điện tử cho công suất 133kW (181PS) tại 3.500v/ph và mô-men xoắn cực đại 430Nm tại 2.500v/ph. Đặc biệt, khối động cơ được đúc bằng hợp kim nhôm giúp tối ưu trọng lượng đóng góp vào việc phân bổ trọng lượng hợp lý giữa cầu trước và cầu sau từ đó giúp xe vận hành ổn định hơn. Ngoài ra, tỷ số nén của động cơ thấp cũng góp phần giúp giảm thiểu rung động mang đến sự êm ái trong vận hành.",
          images: [
            { src: "/images/pajero-perf-1.jpg", alt: "Pajero Sport vận hành trên đường" }
          ]
        },
        {
          desc:
            "Khối động cơ DIESEL MIVEC 2.4L còn trở nên ưu việt hơn nhờ vào sự kết hợp cùng hộp số tự động 8 cấp với chế độ thể thao. Dãy tỷ số truyền trải rộng giúp việc chuyển số mượt mà và êm ái hơn, bên cạnh đó Pajero Sport 2020 còn giúp cho người lái thăng hoa và phấn khích hơn nhờ vào việc tích hợp lẫy chuyển số trên vô-lăng giúp làm chủ quá trình chuyển số, đặc biệt phù hợp khi cần tăng tốc, vượt xe hoặc khi di chuyển trên đường đèo dốc."
        },
        {
          images: [
            { src: "/images/pajero-perf-2.jpg", alt: "Cần số & Super Select 4WD-II" }
          ],
          desc:
            "Pajero Sport 2020 được trang bị hệ thống truyền động 2 cầu Super Select 4WD-II trứ danh của Mitsubishi. Khác với hệ dẫn động 4WD gián đoạn hiện đang được trang bị trên một số mẫu xe SUV khác, người lái chỉ có thể dùng chế độ 2 cầu trong những trường hợp điều kiện đường khó khăn do chế độ 2 cầu trên các mẫu xe này sẽ gây ra hiện tượng trượt bánh khi đánh lái do sự lệch tốc giữa cầu trước và cầu sau không được triệt tiêu, việc này gây ra khó khăn khi đánh lái và cảm giác khó chịu cho người lái. Super Select 4WD-II được sinh ra để làm tốt vai trò khống chế sự khác biệt tốc độ giữa các bánh giúp chiếc xe vận hành êm ái và an toàn trên đường có điều kiện trường nhập vào việc được trang bị vi sai trung tâm giúp triệt tiêu độ lệch tốc giữa cầu trước và cầu sau. Với 4 chế độ cầu 2H–4H–4HLc–4LLc, hệ thống Super Select 4WD-II giúp người lái tự tin, linh hoạt chọn chế độ phù hợp cho Pajero Sport như ở chế độ 2H giúp tiết kiệm với chế độ 1 cầu (2H), vừa có thể vận hành an toàn trên điều kiện đường trơn trượt như một mẫu xe dẫn động 4 bánh toàn thời gian (AWD) ở chế độ 4H, ổn định vượt trội với chế độ 4HLc (2 cầu vi sai trung tâm khóa) khi di chuyển ở điều kiện địa hình phức tạp, offroad với các chế độ gài cầu 4Hlc (2 cầu nhanh vi sai trung tâm khóa) hoặc 4LLc (2 cầu chậm với vi sai trung tâm)."
        },
        {
          desc:
            "Bên cạnh đó, Pajero Sport 2020 cũng mang đến cho người lái thêm 4 chế độ lựa chọn chạy địa hình (Sỏi – Bùn – Cát – Đá) thao tác dễ dàng chỉ bằng một nút bấm giúp hỗ trợ người lái dễ dàng lựa chọn chế độ lái tương ứng với điều kiện địa hình giúp mang lại trải nghiệm lái chân thật hoàn hảo vượt trội."
        },
        {
          desc:
            "Đặc biệt hơn, Mitsubishi Pajero Sport 2020 còn được trang bị thêm khóa vi sai cầu sau điều khiển điện tử bằng nút bấm “ON/OFF R/D LOCK” nằm ở bảng điều khiển trung tâm. Nâng cấp này giúp cho xe có thể dễ dàng vượt qua các loại địa hình khó khăn nhờ vào việc khóa vi sai và phân bổ lực đều xuống 2 bánh sau."
        }
      ]
    },
    // --- AN TOÀN, THÔNG SỐ, HÌNH ẢNH Pajero Sport ---
    safetySection: {
      title: "AN TOÀN MITSUBISHI PAJERO SPORT",
      blocks: [
        {
          desc:
            "An toàn cao cấp với hệ thống Mitsubishi e-Assist thông minh, mang lại sự an tâm cho khách hàng trên mọi chuyến đi.",
          images: [{ src: "/images/pjs-safety-hero.jpg", alt: "Mitsubishi e-Assist trên Pajero Sport" }]
        },
        {
          subtitle: "Trang bị an toàn nổi bật",
          list: [
            "7 túi khí an toàn",
            "Hệ thống phanh giảm thiểu va chạm phía trước (FCM)",
            "Cảnh báo điểm mù (BSW) & Hỗ trợ chuyển làn (LCA)",
            "Cảnh báo phương tiện cắt ngang khi lùi (RCTA)",
            "Hệ thống chống tăng tốc ngoài ý muốn (UMS)",
            "Ga tự động thích ứng (ACC)",
            "Hệ thống kiểm soát chân ga khi đạp phanh (BOS)",
            "Camera lùi & cảm biến trước/sau",
            "Khung xe RISE thép siêu cường",
            "ABS, EBD, BA, Kiểm soát ổn định & lực kéo (ASTC)",
            "Hỗ trợ xuống dốc HDC & Khởi hành ngang dốc HSA"
          ]
        }
      ]
    },

    specsSection: {
      title: "THÔNG SỐ MITSUBISHI PAJERO SPORT",
      blocks: [
        {
          // Dùng HTML để có 2 cột giống ảnh
          html: `
        <div class="overflow-x-auto">
          <table class="w-full text-sm border border-gray-200">
            <thead>
              <tr class="bg-[#E51A1A] text-white">
                <th class="p-2 text-left">Thông số kỹ thuật</th>
                <th class="p-2 text-left">Pajero Sport 4x2AT</th>
                <th class="p-2 text-left">Pajero Sport 4x4AT</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-50"><td class="p-2">Kiểu dáng xe</td><td class="p-2">SUV</td><td class="p-2">SUV</td></tr>
              <tr><td class="p-2">Nguồn gốc</td><td class="p-2">Nhập khẩu</td><td class="p-2">Nhập khẩu</td></tr>
              <tr class="bg-gray-50"><td class="p-2">Số chỗ ngồi</td><td class="p-2">7c</td><td class="p-2">7c</td></tr>
              <tr><td class="p-2">Kích thước DxRxC (mm)</td><td class="p-2">4.825 x 1.815 x 1.835</td><td class="p-2">4.825 x 1.815 x 1.835</td></tr>
              <tr class="bg-gray-50"><td class="p-2">Chiều dài cơ sở</td><td class="p-2">2.800 mm</td><td class="p-2">2.800 mm</td></tr>
              <tr><td class="p-2">Khoảng sáng gầm</td><td class="p-2">218 mm</td><td class="p-2">218 mm</td></tr>
              <tr class="bg-gray-50"><td class="p-2">Bán kính vòng quay</td><td class="p-2">5,6 m</td><td class="p-2">5,6 m</td></tr>
              <tr><td class="p-2">Tự trọng</td><td class="p-2">1940 (kg)</td><td class="p-2">2115 (kg)</td></tr>
              <tr class="bg-gray-50"><td class="p-2">Động cơ</td><td class="p-2">Diesel; 2.4L MIVEC; i4</td><td class="p-2">Diesel; 2.4L MIVEC; i4</td></tr>
              <tr><td class="p-2">Công suất cực đại</td><td class="p-2">181 Ps / 4500 rpm</td><td class="p-2">181 Ps / 4500 rpm</td></tr>
              <tr class="bg-gray-50"><td class="p-2">Mô-men xoắn cực đại</td><td class="p-2">430 Nm / 2500 rpm</td><td class="p-2">430 Nm / 2500 rpm</td></tr>
              <tr><td class="p-2">Hộp số</td><td class="p-2">8AT</td><td class="p-2">8AT</td></tr>
              <tr class="bg-gray-50"><td class="p-2">Dẫn động</td><td class="p-2">RWD</td><td class="p-2">4WD</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    gallerySection: {
      title: "HÌNH ẢNH MITSUBISHI PAJERO SPORT",
      blocks: [
        {
          // Nếu bạn đã thêm slider trong CarDetailPage, bật cờ slider: true
          slider: true,
          images: [
            { src: "/images/pajero-ext-1.jpg", alt: "Pajero Sport nhìn từ sau" },

          ]
        }
      ]
    },

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
    name: "MITSUBISHI ATTRAGE",
    fuel: "4.42L/100Km",
    price: "380,000,000 ₫",
    image: "/images/attrage.png",
     priceTable: [
    { version: "Mitsubishi Attrage MT",            price: "380 triệu đ" },
    { version: "Mitsubishi Attrage CVT",           price: "465 triệu đ" },
    { version: "Mitsubishi Attrage CVT Premium",   price: "490 triệu đ" }
  ],

  // --- TỔNG QUAN (giống layout đang dùng) ---
  overviewSection: {
    title: "TỔNG QUAN MITSUBISHI ATTRAGE",
    blocks: [
      {
        subtitle: "New Mitsubishi Attrage – Khởi đầu vững chắc",
        html: `
          <p>Mitsubishi Motors Việt Nam (MMV) vừa giới thiệu Attrage phiên bản nâng cấp mới. 
          Attrage được bán ra 3 phiên bản: số sàn (MT), số tự động (CVT) và số tự động (CVT Premium) 
          với mức giá khởi điểm từ <b>380 triệu đồng</b>.</p>
        `
      },
      {
        // Thay videoId này bằng ID YouTube bạn muốn (nếu có)
        videoId: "T2qqtiqop0o"
      }
    ]
  },
  // ----- NGOẠI THẤT MITSUBISHI ATTRAGE -----
exteriorSection: {
  title: "NGOẠI THẤT MITSUBISHI ATTRAGE",
  blocks: [
    {
      desc:
        "Mitsubishi Attrage mang đến cái nhìn trẻ trung, hiện đại hơn nhờ được áp dụng triệt để ngôn ngữ thiết kế Dynamic Shield. Xe có kích thước tổng thể dài x rộng x cao lần lượt là 4305 x 1607 x 1505 mm.",
      images: [
        { src: "/images/attrage-ex-hero.jpg", alt: "Ngoại thất Mitsubishi Attrage" }
      ]
    },
    {
      subtitle: "Đầu xe",
      desc:
        "Khách hàng sẽ không mất nhiều thời gian để làm quen với diện mạo mới của Attrage . Bởi phần đầu xe có thiết kế khá giống những mẫu xe đời mới của Mitsubishi. Diện hình như hốc đèn sương mù hai bên có thiết kế khoét sâu góc cạnh và được viền crom hình chữ “C” để khiến người dùng liên tưởng đến Xpander.",
      images: [
        { src: "/images/attrage-ex-front-1.jpg", alt: "Đầu xe Attrage" }
      ]
    },
    {
      desc:
        "Bên cạnh đèn pha Halogen thông dụng, Attrage còn được cung cấp công nghệ Bi-LED hiện đại trên các bản cao cấp. Qua đó giúp tăng cường hiệu năng chiếu sáng đáng kể so với bản tiền nhiệm. Đi kèm là dải đèn LED ban ngày được vuốt cong sắc sảo.",
      images: [
        { src: "/images/attrage-ex-front-2.jpg", alt: "Cụm đèn trước Attrage" }
      ]
    },
    {
      subtitle: "Thân xe",
      desc:
        "Nhìn từ bên hông, thay đổi đáng chú ý nhất trên Attrage là bộ vành mới có cấu trúc đa chấu kép sơn màu bạc có kích thước từ 14–15 inch.",
      images: [
        { src: "/images/attrage-ex-side.jpg", alt: "Thân xe Attrage" }
      ]
    },
    {
      desc:
        "Những chi tiết còn lại gần như được giữ nguyên với đường nhấn gân guốc được vuốt dài từ vòm bánh trước và kết thúc tại đèn hậu. Phía trên là cặp gương chiếu hậu có chức năng gập-chỉnh điện và tích hợp đèn báo rẽ.",
      images: [
        { src: "/images/attrage-ex-3q.jpg", alt: "Góc 3/4 Attrage" }
      ]
    },
    {
      subtitle: "Đuôi xe",
      desc:
        "Thiết kế đuôi xe bầu bĩnh có nét thực dụng ở phiên bản cũ đã bị loại bỏ hoàn toàn. Thay vào đó là tạo hình góc cạnh mang đến cái nhìn khoẻ khoắn và năng động hơn.",
      images: [
        { src: "/images/attrage-ex-rear.jpg", alt: "Đuôi xe Attrage" }
      ]
    },
    {
      desc:
        "Cụm đèn hậu được làm mới với đồ hoạ gồm chữ “L” xếp chồng lên nhau khá bắt mắt. Bên cạnh đó, đuôi xe còn được tích hợp thêm cản sau gồm các khu khuếch tán góp phần cải thiện tính khí động hoặc và tăng cường vẻ thể thao.",
      images: [
        { src: "/images/attrage-ex-taillight.jpg", alt: "Đèn hậu Attrage" }
      ]
    }
  ]
},
interiorSection: {
  title: "NỘI THẤT MITSUBISHI ATTRAGE",
  blocks: [
    {
      desc:
        "Tương tự như bản cũ, khoang cabin Attrage vẫn ghi điểm tốt nhờ không gian rộng rãi với trục cơ sở đạt 2550 mm. Tuy nhiên, phần nội thất không có quá nhiều thay đổi về mặt thiết kế như phần ngoại hình."
    },
    {
      subtitle: "Khoang lái",
      images: [
        { src: "/images/atg-int-front-seats.jpg", alt: "Khoang lái Mitsubishi Attrage" }
      ],
      desc:
        "Một chi tiết mới rất ấn tượng trên Attrage chính là chất liệu giả Carbon được trang trí tại cụm điều khiển trung tâm và khu vực bao quanh nút chỉnh cửa sổ. Điều này giúp khoang lái trông mới mẻ và cao cấp hơn đôi chút so với bản cũ."
    },
    {
      images: [
        { src: "/images/atg-int-dashboard-wide.jpg", alt: "Bảng táp-lô Attrage" }
      ],
      desc:
        "Khu vực táp lô của Attrage vẫn có thiết kế đơn giản, trông rất gọn gàng và dễ nhìn bởi không xuất hiện nhiều nút bấm vật lý. Tuy nhiên, nhựa cứng là chất liệu chủ đạo đã khiến táp lô chưa thực sự ấn tượng."
    },
    {
      images: [
        { src: "/images/atg-int-steering.jpg", alt: "Vô lăng Attrage" }
      ],
      desc:
        "Đối diện ghế lái là vô lăng 3 chấu bọc da, có thể điều chỉnh 2 hướng (lên/xuống). Kèm theo đó là các phím bấm tiện lợi tăng cường sự tập trung cho tài xế trong lúc lái xe."
    },
    {
      subtitle: "Khoang hành khách",
      images: [
        { src: "/images/atg-int-rear-seats.jpg", alt: "Hàng ghế sau Attrage" }
      ],
      desc:
        "Chất liệu sử dụng cho ghế ngồi trên xe có 2 tuỳ chọn vải hoặc da tổng hợp thông dụng. Không gian để chân ở hàng ghế sau khá thoải mái, hành khách cũng sẽ đỡ mỏi tay khi đi xe nhờ có bệ tỳ tay trung tâm."
    },
    {
      subtitle: "Khoang hành lý",
      desc:
        "Với dung tích khoang hành lý 450 lít, chủ nhân có thể mang theo rất nhiều đồ dùng lên Attrage ."
    },
    {
      subtitle: "Tiện nghi – Hiện đại",
      images: [
        { src: "/images/atg-int-infotainment.jpg", alt: "Màn hình giải trí Attrage" }
      ],
      desc:
        "Chỉ có phiên bản cao cấp nhất của Attrage mới được trang bị điều hoà tự động, những phiên bản còn lại đều có dạng chỉnh cơ. Bên cạnh đó, các phiên bản đều không có cửa gió cho hàng ghế sau. Do đó, khả năng làm mát của Attrage 2020 vẫn chưa được cải thiện so với trước."
    },
    {
      desc:
        "Bù lại, hệ thống thông tin giải trí của Attrage rất hiện đại, nếu về đến Việt Nam sẽ rất dễ dàng chinh phục những khách hàng thích công nghệ.\n\nCụ thể gồm có:"
    },
    {
      // danh sách tính năng đúng nguyên văn
      list: [
        "Màn hình cảm ứng 7 inch tích hợp hệ thống định vị",
        "Đàm thoại rảnh tay",
        "Kết nối điện thoại thông minh, Apple CarPlay, Android Auto",
        "Kết nối USB, Bluetooth",
        "Cổng sạc 12V",
        "Dàn âm thanh 4 loa",
        "Chìa khóa thông minh, khởi động bằng nút bấm"
      ]
    }
  ]
},
// ==== VẬN HÀNH – AN TOÀN – THÔNG SỐ – HÌNH ẢNH (Mitsubishi Attrage) ====

performanceSection: {
  title: "VẬN HÀNH MITSUBISHI ATTRAGE",
  blocks: [
    {
      html: `
        <p>Attrage tiếp tục là mẫu sedan hạng B có sức mạnh động cơ yếu nhất phân khúc khi sử dụng cấu hình cũ là Xăng 1.2L 3 xy lanh, 12 van, DOHC. Cỗ máy này chỉ cho ra công suất tối đa 78 mã lực, mô-men xoắn cực đại 100 Nm. Đi kèm là 2 tùy chọn hộp số gồm số sàn 5 cấp hoặc vô cấp CVT kết hợp cùng hệ dẫn động cầu trước.</p>
      `,
      images: [{ src: "/images/att-perf-engine.jpg", alt: "Khoang động cơ Mitsubishi Attrage" }]
    },
    {
      html: `
        <p>Với sức mạnh động cơ "khiêm tốn", đôi lúc chủ nhân sẽ cảm thấy khá bực bội với khả năng tăng tốc chậm và ì ạch của xe Ô tô Attrage 2020. Bù lại xe hoạt động rất bền bỉ và rất tiết kiệm xăng với mức tiêu hao nhiên liệu trung bình đạt 3,9L/100km. Do đó, Attrage thường được các bác tài lựa chọn để chạy dịch vụ.</p>
        <p>Bên cạnh đó, hiệu quả giảm xóc của Attrage cũng được đánh giá cao trong phân khúc với hệ thống treo trước/sau MacPherson với lò xo cuộn/thanh xoắn. Đi kèm là 2 tùy chọn lốp dày có thông số 175/65R14 và 185/55R15.</p>
        <p>Bên cạnh đó, Attrage còn có lợi thế khả năng "leo lề" với khoảng sáng gầm cao 160–170 mm, "nhỉnh" hơn nhiều đối thủ trong phân khúc.</p>
      `
    }
  ]
},

safetySection: {
  title: "AN TOÀN MITSUBISHI ATTRAGE",
  blocks: [
    {
      html: `
        <p>Tương tự như xe Mirage, Attrage phiên bản mới cũng được trang bị hệ thống giảm thiểu tai nạn khi đạp nhầm chân ga hiện đại. Hệ thống này sẽ hoạt động dựa vào radar, khi xác định được xe phía trước cách 4m mà người lái lại nhấn ga mạnh, hệ thống sẽ tự động can thiệp để giảm tốc độ.</p>
        <p>Ngoài ra, xe còn có rất nhiều những tính năng an toàn khác như:</p>
      `
    },
    {
      list: [
        "Cruise Control",
        "Camera lùi",
        "Hệ thống cảnh báo và giảm thiểu va chạm phía trước",
        "Hệ thống giảm thiểu sai lệch cảm biến radar",
        "Chống bó cứng phanh",
        "Phân phối lực phanh điện tử",
        "Hỗ trợ phanh khẩn cấp",
        "Kiểm soát ổn định",
        "Kiểm soát lực kéo",
        "Hỗ trợ khởi hành ngang dốc",
        "2 túi khí",
        "Ghế trẻ em ISOFIX",
        "Cruise control"
      ]
    },
    {
      images: [{ src: "/images/att-safety-hero.jpg", alt: "Tính năng an toàn trên Mitsubishi Attrage" }]
    }
  ]
},

specsSection: {
  title: "THÔNG SỐ MITSUBISHI ATTRAGE",
  blocks: [
    {
      table: [
        ["Tên xe", "Mitsubishi Attrage"],
        ["Số chỗ ngồi", "05"],
        ["Kiểu xe", "Sedan"],
        ["Kích thước DxRxC (mm)", "4305 x 1607 x 1505 mm"],
        ["Chiều dài cơ sở", "2550 mm"],
        ["Động cơ", "Xăng 1.2L 3 xy lanh, 12 van, DOHC"],
        ["Dung tích công tác", "1.193cc"],
        ["Dung tích bình nhiên liệu", "35L"],
        ["Loại nhiên liệu", "Xăng"],
        ["Công suất cực đại (mã lực)", "78 mã lực tại 6000 vòng/phút"],
        ["Mô-men xoắn cực đại (Nm)", "100 Nm tại 4000 vòng/phút"],
        ["Hộp số", "Số sàn 5 cấp hoặc vô cấp CVT"],
        ["Hệ dẫn động", "Cầu trước"],
        ["Treo trước/sau", "MacPherson với lò xo cuộn/thanh xoắn"],
        ["Phanh trước/sau", "Đĩa thông gió/tang trống"],
        ["Khoảng sáng gầm xe", "160–170 mm"],
        ["Trợ lực lái", "Điện"],
        ["Cỡ mâm", "14–15 inch"]
      ]
    }
  ]
},

gallerySection: {
  title: "HÌNH ẢNH MITSUBISHI ATTRAGE",
  blocks: [
    {
      images: [
        { src: "/images/att-safety-hero.jpg", alt: "Mitsubishi Attrage trong showroom" }
      ]
    }
  ]
}

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
