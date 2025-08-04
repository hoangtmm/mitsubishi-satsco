const carData = [
  {
    slug: "all-new-xforce",
    name: "ALL-NEW XFORCE",
    fuel: "5.5L/100Km",
    price: "599,000,000 ₫",
    image: "/images/xforce.png",
    // ==== Thông tin chi tiết mở rộng ====
    banner: "/images/xforce.png",
    hotline: "094 7700 923",
    promo: "Giảm 50% phí trước bạ, tặng bảo hiểm vật chất & nhiều ưu đãi khác",
    priceBox: [
      { version: "Xforce Standard", price: "599.000.000" },
      { version: "Xforce Premium", price: "650.000.000" },
    ],
    installments: [
      { prepay: "120.000.000", months: 60, rate: "7.5%", monthly: "8.500.000" },
    ],
    overview: {
      title: "Tổng quan Mitsubishi Xforce",
      image: "/images/xforce-overview.png",
      content: `
New Mitsubishi Xforce 2025 là mẫu SUV đô thị phong cách năng động, thiết kế mới hoàn toàn, không gian nội thất rộng rãi và hàng loạt công nghệ an toàn vượt trội...
      `
    },
    versions: [
      "Xforce Standard", "Xforce Premium"
    ],
    equipment: [
      {
        title: "Trang thiết bị Mitsubishi Xforce",
        image: "/images/xforce-equipment.png",
        content: `Danh sách tính năng nổi bật: Đèn LED Projector, Cảm biến lùi, Camera 360, dàn âm thanh Yamaha, v.v...`
      }
    ],
    sections: [
      {
        title: "Ngoại thất Mitsubishi Xforce",
        blocks: [
          {
            subtitle: "Đầu xe",
            image: "/images/xforce-front.png",
            desc: "Thiết kế Dynamic Shield mới, đèn LED chiếu sáng ban ngày, lưới tản nhiệt góc cạnh thể thao."
          },
          {
            subtitle: "Thân xe",
            image: "/images/xforce-side.png",
            desc: "Mâm 18 inch, đường gân nổi sắc nét, thiết kế khí động học."
          },
          {
            subtitle: "Đuôi xe",
            image: "/images/xforce-rear.png",
            desc: "Cụm đèn hậu LED tạo hình chữ T hiện đại, cánh gió thể thao."
          },
        ]
      },
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
          },
        ]
      },
      {
        title: "An toàn Mitsubishi Xforce",
        blocks: [
          {
            subtitle: "",
            image: "/images/xforce-safety.png",
            desc: "Hệ thống kiểm soát lực kéo AYC, phanh ABS/EBD, cảnh báo điểm mù, cảnh báo phương tiện cắt ngang, 6 túi khí."
          },
        ]
      },
    ],
    specsImage: "/images/xforce-specs.png",
    gallery: [
      "/images/xforce-1.png",
      "/images/xforce-2.png",
      "/images/xforce-3.png",
    ]
  },
  // ==== Các xe khác để nguyên như cũ, có thể bổ sung chi tiết tương tự nếu cần ====
  {
    slug: "all-new-xpander",
    name: "ALL NEW XPANDER",
    fuel: "6.9L/100Km",
    price: "560,000,000 ₫",
    image: "/images/xpander.png",
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
  },
];
export default carData;
