// src/assets/newsArticles.js
// Nội dung chi tiết cho từng bài theo slug.

const newsArticles = [
  {
    slug: "gioi-thieu-mitsubishi-xforce-moi-2025",
    // title / cover có thể bỏ, sẽ dùng title/image từ newsData
    blocks: [
      {
        type: "p",
        text:
          "Mitsubishi Xforce là mẫu SUV hạng B hoàn toàn mới tại Việt Nam, ra mắt chính thức 01/2024. Xe nhập khẩu từ Indonesia, thiết kế theo ngôn ngữ Dynamic Shield với các nâng cấp đáng chú ý về an toàn và tiện nghi.",
      },
      {
        type: "img",
        src: "/images/xforce-hero.jpg",
        alt: "Giới thiệu Mitsubishi Xforce mới 2025",
        caption: "Giới thiệu Mitsubishi Xforce Mới 2025",
        full: true, // ảnh lớn, không bị cắt
      },
      { type: "h2", text: "1. Thiết Kế & Công Nghệ" },
      {
        type: "p",
        text:
          "Khoang cabin được tối ưu công thái học, màn hình giải trí trung tâm lớn hỗ trợ Apple CarPlay/Android Auto. Các công nghệ an toàn chủ động gồm RCTA, BSW, ACC... đáp ứng tốt nhu cầu gia đình.",
      },
      {
        type: "ul",
        items: [
          "Ngoại thất theo triết lý Dynamic Shield mới, sắc sảo và vững chãi.",
          "Khoang lái rộng rãi, nhiều hộc chứa đồ, đề cao tính tiện dụng.",
          "Gói an toàn chủ động tiên tiến, hỗ trợ lái hiện đại.",
          "Khung gầm tối ưu, vận hành linh hoạt trong đô thị.",
        ],
      },

      { type: "h2", text: "2. Mục Tiêu Tại Thị Trường Việt Nam" },
      {
        type: "p",
        text:
          "Xforce hướng đến khách hàng gia đình trẻ tại Việt Nam, cạnh tranh trong phân khúc CUV/SUV hạng B với các đối thủ như Hyundai Creta, Kia Seltos, Toyota Yaris Cross…",
      },
      {
        type: "img",
        src: "/images/xforce-splash.jpg",
        alt: "Mitsubishi Xforce Splash",
        caption: "Xforce mang đến trải nghiệm vận hành êm ái và chắc chắn.",
      },

      { type: "h2", text: "3. Kết Luận" },
      {
        type: "p",
        text:
          "Với thiết kế ấn tượng, khoang nội thất tiện nghi và công nghệ an toàn phong phú, Mitsubishi Xforce 2025 là lựa chọn đáng cân nhắc cho khách hàng cần một chiếc CUV/SUV hạng B đa dụng.",
      },
    ],
  },

  // Ví dụ ngắn cho bài khác (bạn điền thêm nội dung thật theo nhu cầu)
// Chỉ thay đúng entry này trong newsArticles
{
  slug: "so-sanh-mitsubishi-xpander-va-honda-brv",
  cover: "/images/xpander-vs-brv.jpg",
  title: "SO SÁNH MITSUBISHI XPANDER VÀ HONDA BR-V",
  date: "2025-03-16",
  blocks: [
    { type: "h2", text: "So Sánh Mitsubishi Xpander và Honda BRV: Chỗ Nào Đáng Mua Hơn?" },

    // Ảnh hero
    { type: "img", src: "/images/xpander-vs-brv.jpg", alt: "Mitsubishi Xpander vs Honda BR-V" },

    // Mở bài
    {
      type: "p",
      text:
        "Phân khúc MPV 7 chỗ đang rất sôi động tại Việt Nam, với hai đại diện nổi bật là Honda BR-V và Mitsubishi Xpander Premium. Cả hai mẫu xe đều hướng đến những gia đình cần một chiếc xe rộng rãi, tiết kiệm nhiên liệu và nhiều tiện nghi. Vậy so sánh Mitsubishi Xpander và Honda BRV, mẫu xe nào đáng mua hơn? Hãy cùng so sánh chi tiết!",
    },

    // Bảng 1: Giá/Kích thước/Động cơ
    {
      type: "h3",
      text:
        "Bảng so sánh Mitsubishi Xpander và Honda BRV theo các tiêu chí giá bán, kích thước, thiết kế, động cơ và hiệu suất:",
    },
    {
      type: "table",
      headers: ["Tiêu chí", "Mitsubishi Xpander", "Honda BR-V"],
      rows: [
        [
          "1. Giá bán",
          "– MT: <strong>555 triệu đồng</strong><br/>– AT: <strong>598 triệu đồng</strong><br/>– AT Premium: <strong>658 triệu đồng</strong>",
          "– G: <strong>661 triệu đồng</strong><br/>– L: <strong>705 triệu đồng</strong>",
        ],
        [
          "2. Kích thước & Thiết kế",
          "– Kích thước (DxRxC): <strong>4.595 x 1.750 x 1.750 mm</strong><br/>– Chiều dài cơ sở: <strong>2.775 mm</strong><br/>– Khoảng sáng gầm: <strong>225 mm</strong><br/>– Thiết kế: Phong cách MPV, mềm mại, linh hoạt",
          "– Kích thước (DxRxC): <strong>4.490 x 1.780 x 1.685 mm</strong><br/>– Chiều dài cơ sở: <strong>2.700 mm</strong><br/>– Khoảng sáng gầm: <strong>207 mm</strong><br/>– Thiết kế: Phong cách SUV, mạnh mẽ, thể thao",
        ],
        [
          "3. Động cơ & Hiệu suất",
          "– Động cơ: <strong>1.5L MIVEC</strong><br/>– Công suất: <strong>104 mã lực @ 6.000 vòng/phút</strong><br/>– Mô-men xoắn: <strong>141 Nm @ 4.000 vòng/phút</strong><br/>– Hộp số: <strong>Tự động 4 cấp</strong><br/>– Dẫn động: <strong>Cầu trước</strong>",
          "– Động cơ: <strong>1.5L DOHC i-VTEC</strong><br/>– Công suất: <strong>119 mã lực @ 6.600 vòng/phút</strong><br/>– Mô-men xoắn: <strong>145 Nm @ 4.300 vòng/phút</strong><br/>– Hộp số: <strong>CVT</strong><br/>– Dẫn động: <strong>Cầu trước</strong>",
        ],
      ],
    },

    // Bảng 2: Nội thất & tiện nghi
    {
      type: "h3",
      text: "Bảng so sánh Mitsubishi Xpander và Honda BRV về Trang bị nội thất & tiện nghi:",
    },
    {
      type: "table",
      headers: ["Tiêu chí", "Mitsubishi Xpander", "Honda BR-V"],
      rows: [
        ["1. Màn hình giải trí", "9 inch, hỗ trợ Apple CarPlay/Android Auto", "7 inch, hỗ trợ điện thoại thông minh"],
        ["2. Chất liệu ghế", "Da (bản cao cấp), nỉ (bản thấp)", "Da (bản cao cấp), nỉ (bản thấp)"],
        ["3. Điều hòa", "Tự động, có cửa gió hàng ghế sau", "Tự động, có cửa gió hàng ghế sau"],
        ["4. Phanh tay điện tử", "Có, kèm giữ phanh tự động", "Không"],
        ["5. Hệ thống âm thanh", "6 loa", "6 loa"],
        [
          "6. Tính năng khác",
          "– Hỗ trợ sạc điện thoại qua cổng USB<br/>– Hệ thống kiểm soát hành trình",
          "– Tự động khóa cửa khi rời xe<br/>– Hệ thống kiểm soát hành trình",
        ],
      ],
    },

    // Bảng 3: An toàn
    {
      type: "h3",
      text: "Bảng so sánh Mitsubishi Xpander và Honda BRV về trang bị an toàn:",
    },
    {
      type: "table",
      headers: ["Tiêu chí", "Mitsubishi Xpander", "Honda BR-V"],
      rows: [
        ["1. Túi khí", "2 túi khí", "2 túi khí"],
        ["2. Hệ thống phanh", "ABS, EBD, BA", "ABS, EBD, BA"],
        ["3. Cân bằng điện tử", "Có", "Có"],
        ["4. Kiểm soát lực kéo", "Có", "Có"],
        ["5. Hỗ trợ khởi hành ngang dốc", "Có", "Có"],
        ["6. Camera lùi", "Camera 360°", "Có"],
        ["7. Cảm biến lùi", "Có", "Có"],
      ],
    },

    // Đánh giá tổng thể
    { type: "h3", text: "Đánh giá tổng thể khi so sánh Mitsubishi Xpander và Honda BRV" },
    { type: "h4", text: "Mitsubishi Xpander" },
    {
      type: "ul",
      items: [
        "Giá rẻ hơn đáng kể",
        "Thiết kế MPV lai SUV linh hoạt",
        "Khoảng sáng gầm cao, đi đường xấu tốt",
        "Màn hình lớn, phanh tay điện tử",
      ],
    },
    { type: "h4", text: "Honda BR-V" },
    {
      type: "ul",
      items: [
        "Động cơ mạnh hơn",
        "Công nghệ an toàn vượt trội với Honda Sensing",
        "Thiết kế SUV thể thao, cứng cáp",
        "Khởi động từ xa, khóa cửa tự động",
      ],
    },

    // Khuyến mãi
    { type: "h3", text: "Khuyến mãi hiện tại Mitsubishi Xpander" },
    {
      type: "ul",
      items: [
        "Hỗ trợ 50% lệ phí trước bạ.",
        "Tặng phiếu nhiên liệu trị giá từ 15 đến 21 triệu đồng.",
        "Tặng camera 360 độ cho phiên bản Xpander AT Premium và Xpander Cross; tặng camera lùi cho phiên bản MT.",
        "Tặng gói phụ kiện bao gồm cảm biến cảnh báo áp suất lốp, bơm hơi và camera hành trình.",
        "Hỗ trợ chương trình trả góp với lãi suất ưu đãi trên thị trường.",
      ],
    },

    // Hotline
    {
      type: "p",
      text:
        "Liên hệ Hotline – 094 7700 923 (Quân) để nhận thêm thông tin chi tiết về khuyến mãi từng dòng xe.",
    },
  ],
},


 // src/assets/newsArticles.js  (chỉ cần thêm object này vào mảng export)
{
  slug: "mitsubishi-xforce-tham-gia-thi-truong-viet-nam",
  title: "Mitsubishi Xforce Tham Gia Thị Trường Xe Việt Nam",
  cover: "/images/xforce-show.jpg",
  blocks: [
    // mở bài ngắn
    {
      type: "p",
      text:
        "Sự xuất hiện của Xforce tại Việt Nam giúp đa dạng hóa lựa chọn SUV đô thị, đáp ứng nhu cầu người dùng trẻ.",
    },

    // --- Phần nội dung chính như ảnh ---
    { type: "h2", text: "Mitsubishi Xforce Mới" },
    {
      type: "p",
      text:
        "Đầu năm 2024, Mitsubishi Việt Nam ra mắt một mẫu xe hoàn toàn mới làm khuynh đảo thị trường xe tại Việt Nam, cái tên đáng chú ý được nhắc tới là Mitsubishi Xforce Mới, một mẫu xe SUV cỡ B rất được chào đón tại Việt Nam.",
    },
    {
      type: "p",
      text:
        "Mitsubishi Xforce Mới là cái tên đang nhận được nhiều sự quan tâm của người dùng. Ngoài yếu tố sản phẩm mới, mẫu xe mang thương hiệu Nhật Bản đang tạo một áp lực khá lớn với các mẫu xe trong phân khúc SUV đô thị cỡ B đang “hot” tại Việt Nam.",
    },
    {
      type: "p",
      text:
        "Tuy nhiên, chờ đợi Mitsubishi Xforce Mới sẽ là hàng chục cái tên, tiêu biểu như Hyundai Creta, Kia Seltos, Honda HR-V, Toyota Yaris Cross, Mazda CX-3, MG ZS, Peugeot 2008 và Nissan Kicks. Dó là chưa kể phiên bản khởi điểm của những mẫu C-SUV sẽ có giá ngang với phiên bản cao cấp của Mitsubishi Xforce.",
    },
    {
      type: "p",
      text:
        "Là sản phẩm được chuẩn bị kỹ lưỡng, Mitsubishi Xforce có cơ hội tranh giành thị phần với các sản phẩm đi trước. Nhưng chờ đợi “tân binh” này cũng là những thách thức cần vượt qua, nếu thực sự muốn thành công như những gì Mitsubishi Xpander đã làm được.",
    },

    { type: "h2", text: "Cơ hội cạnh tranh" },
    {
      type: "p",
      text:
        "Theo chia sẻ của tư vấn bán hàng, Mitsubishi Xforce sẽ được ra mắt khách Việt vào cuối tháng 12 năm nay, hoặc đầu tháng 1/2024. Mẫu xe này sẽ “lên sàn” với tâm thế cạnh tranh sòng phẳng cùng các sản phẩm lắp ráp trong nước, do chính sách hỗ trợ “xe nội” của Chính phủ sẽ kết thúc vào ngày 31/12.",
    },
    {
      type: "p",
      text:
        "Khi ưu đãi không còn, người dùng dễ có xu hướng nghiêng về các dòng xe nhập khẩu như Mitsubishi Xforce. Nguyên nhân là có một bộ phận không nhỏ khách hàng vẫn có phần nào tâm lý chuộng xe nhập khẩu nguyên chiếc.",
    },
    {
      type: "p",
      text:
        "Hình thức công bố là một lộ trình có lợi cho Mitsubishi Xforce. Mỗi người đều có quan điểm thẩm mỹ khác nhau, nhưng đối tượng khách hàng mua ô tô tại Việt Nam đang có xu hướng trẻ hóa, nên không thể phủ nhận rằng Mitsubishi Xforce vẫn có sức hút riêng.",
    },
    {
      type: "p",
      text:
        "Trang bị của Mitsubishi Xforce chưa được hé lộ nhưng mẫu xe này được kỳ vọng sẽ có hàm lượng công nghệ không thua kém các đối thủ.",
    },

    { type: "h2", text: "Thách thức không nhỏ" },
    {
      type: "p",
      text:
        "Phía đại lý cho biết, Mitsubishi Xforce có giá dự kiến 650–750 triệu đồng, thuộc tầm trung của phân khúc B-SUV. Mức giá này cao hơn Kia Seltos (599–724 triệu đồng) và Hyundai Creta (636–740 triệu đồng), nhưng rẻ hơn Honda HR-V (699–871 triệu đồng) hay Toyota Yaris Cross (730–838 triệu đồng).",
    },
    {
      type: "p",
      text:
        "Nếu được chốt giá bán cao nhất khoảng 750 triệu đồng, Mitsubishi Xforce còn phải đối mặt với áp lực cạnh tranh từ 2 sản phẩm thuộc phân khúc C-SUV như Mazda CX-5 (khởi điểm 749 triệu đồng) và Hyundai Tucson (từ 769 triệu đồng).",
    },
  ],
},
{
  slug: "mitsubishi-xpander-ban-dien-hoa-co-the-ra-mat-nam-sau",
  title: "Mitsubishi Xpander phiên bản điện hóa có thể ra mắt vào năm sau",
  cover: "/images/xpander-ev.jpg",
  blocks: [
    {
      type: "p",
      text:
        "Mitsubishi cam kết hãng sẽ tiếp tục bổ sung các dòng xe điện hóa trong tương lai gần để người dùng khu vực Đông Nam Á có thêm lựa chọn.",
    },
    {
      type: "p",
      text:
        "Theo thông tin do tạp chí OtoDriver của Indonesia đăng tải, Mitsubishi đang lên kế hoạch ra mắt 2 mẫu xe điện mới vào đầu năm 2024. Nguồn tin này còn khẳng định một trong hai mẫu xe kể trên chính là phiên bản điện hóa của mẫu MPV ăn khách Xpander.",
    },
    {
      type: "p",
      text:
        "Irwan Kuncoro – Giám đốc Kinh doanh và Marketing của Mitsubishi Indonesia tiết lộ: “Đầu năm tới, chúng tôi dự định ra mắt một mẫu xe điện thương mại và cả một chiếc xe điện du lịch. Chúng sẽ có mặt tại Triển lãm Ô tô Quốc tế Gaikindo (GIIAS) 2024”.",
    },
    {
      type: "p",
      text:
        "Đại diện Mitsubishi Indonesia cũng cho biết các mẫu ô tô điện được lắp ráp nội địa để tận dụng các ưu đãi về các diện của Chính phủ Indonesia.",
    },
    {
      type: "p",
      text:
        "Vì xe điện cần nhiều thời gian để phát triển, do đó, chiếc Xpander EV ra mắt tại GIIAS 2024 nhiều khả năng chỉ là một bản nguyên mẫu xem trước chứ không phải là phiên bản thương mại.",
    },
    {
      type: "p",
      text:
        "Ngoài ra, cũng có khả năng đây chỉ là Xpander bản hybrid. Phiên bản này được tờ Nikkei Asia nhận định sẽ ra mắt vào ngay đầu năm 2024.",
    },
    {
      type: "p",
      text:
        "Mẫu xe thứ hai được đồn đoán sẽ ra mắt tại GIIAS 2024 là “tiểu Xpander” Mitsubishi eK X EV. Việc mẫu xe này cũng đang được tiến hành thử nghiệm cho thấy khả năng này là rất cao. Sau khi mở bán, Mitsubishi eK X EV sẽ cạnh tranh trực tiếp với Wuling Air EV, phiên bản cao cấp hơn của Wuling HongGuang MiniEV đã có ở Việt Nam.",
    },
  ],
},
{
  slug: "mitsubishi-nha-hang-minivan-dien-hoa-cam-hung-tu-pajero-outlander",
  title:
    "Mitsubishi 'nhá hàng' mẫu minivan điện hóa mới, lấy cảm hứng từ Pajero và Outlander",
  cover: "/images/minivan-ev.jpg",
  blocks: [
    {
      type: "p",
      text:
        "Mới đây, Mitsubishi vừa tung ảnh teaser hé lộ mẫu xe điện hóa mới sẽ được hãng giới thiệu tại triển lãm Japan Mobility Show 2023 chuẩn bị diễn ra vào 28/10 tới 5/11.",
    },
    {
      type: "p",
      text:
        "Dựa vào hình ảnh được chia sẻ có thể thấy, đầu xe khá giống xe tải hoặc minivan. Xe có dải đèn LED được thiết kế hình chữ T nổi bật, nối liền với logo Mitsubishi phát sáng. Trên nóc xe còn có một trang bị giống như lều dã ngoại.",
    },
    {
      type: "p",
      text:
        "Cùng với đó là hình ảnh 6 người vừa bước xuống xe, ám chỉ số ghế sẽ là 6 mà xe sở hữu.",
    },
    {
      type: "p",
      text:
        "Hiện hãng cũng chưa chia sẻ nhiều thông tin về mẫu xe này. Chỉ biết rằng đây là xe điện hóa. Chiếc xe được kỳ vọng sẽ giúp người dùng an toàn và tiện nghi “trên mọi địa hình, trong mọi thời tiết”.",
    },
    {
      type: "p",
      text:
        "Được biết, mẫu xe mới của Mitsubishi được lấy cảm hứng từ SUV Pajero, SUV Outlander PHEV và minivan Delica D:5. Xe sẽ có không gian nội thất rộng rãi, thoải mái, mang đến trải nghiệm thú vị cho người dùng trên những hành trình dài.",
    },
    {
      type: "p",
      text:
        "Trước đó, hãng xe Nhật từng công bố kế hoạch sẽ sớm trình làng 16 mẫu xe mới. Trong đó, sẽ có một xe là minivan dùng động cơ đốt trong và một xe minivan điện hóa. Chính vì thế, khả năng cao mẫu xe điện hóa chuẩn bị ra mắt trong tháng 10 sẽ là minivan.",
    },
  ],
},
// ... các bài đã có ở trên

{
  slug: "mitsubishi-xforce-so-gang-voi-hyundai-creta",
  blocks: [
    {
      type: "h2",
      text: "Mitsubishi Xforce 'so găng' với Hyundai Creta: sóng gió phân khúc CUV/SUV hạng B"
    },

    {
      type: "p",
      text: "Giữa mẫu xe Hàn bán chạy hàng đầu phân khúc gầm cao hạng B và làn gió mới đến từ Nhật Bản chuẩn bị thổi vào thị trường Việt Nam, đâu mới là cái tên chiều chuộng người dùng nhất."
    },

    {
      type: "p",
      text:
        "Đầu tiên xét về vóc dáng tổng thể, “tân binh” Mitsubishi XFORCE sở hữu kích thước DxRxC lần lượt là: 4.390 x 1.810 x 1.660 (mm) – nhìn hơn về chiều dài, nhưng lại thua đôi chút về chiều rộng so với Hyundai Creta, khi đại diện đến từ Hàn Quốc có “số đo cơ thể” là 4.315 x 1.790 x 1.660 (mm). Cả hai xe có chiều cao bằng nhau."
    },
    {
      type: "p",
      text:
        "Tuy nhiên đáng chú ý, XFORCE lại có khoảng sáng gầm 222mm, trong khi con số này ở Creta chỉ là 200mm. Lợi thế “chân dài cao ráo” và gầm xe sáng sủa sẽ giúp người đi tự tin leo vỉa hè hoặc di chuyển qua những đoạn địa hình xấu, chỗ ngập nước dễ dàng hơn – đồng thời giảm bớt khả năng gặp đá vỉa gây móp méo gầm cao có thể nổ lốp hay cạ gầm."
    },
    {
      type: "p",
      text:
        "Đó là còn chưa kể tới, kích thước trục cơ sở của Mitsubishi XFORCE là 2.650 mm; tức là vượt trội hơn đáng kể so với Hyundai Creta – vốn chỉ có 2.610 mm. Đây chính là một thước đo quan trọng, quyết định mức độ rộng rãi của nội thất cũng như độ êm ái, thoải mái khi di chuyển đường dài."
    },
    {
      type: "p",
      text:
        "Đồng thời, Mitsubishi cũng rất “ăn chơi” khi trang bị cho “con cưng” XFORCE dàn chân “xịn xò” với bộ mâm có kích thước lên tới 18 inch. Trong khi đó Hyundai Creta – như hầu hết các mẫu xe khác trong phân khúc – chỉ sở hữu bộ mâm 17 inch mà thôi."
    },
    {
      type: "p",
      text:
        "Trong khi thiết kế của Hyundai Creta mang nhiều nét hiện đại, sang trọng, thiên về thanh lịch; thì Mitsubishi XFORCE lại đem đến cảm giác trẻ trung, thể thao và táo bạo; thậm chí mang thêm một chút phong cách tương lai."
    },
    {
      type: "p",
      text:
        "Bước vào bên trong xe, có thể thấy rõ ràng Mitsubishi XFORCE đem lại cảm giác thân thiện, hiện đại và trẻ trung hơn hẳn; với thiết kế ghế ngồi kiểu dệt vải Melange sáng màu cực kỳ hợp mắt ở ngoại thất, ôm người vừa phải và tựa vai nhô cao. Đặc biệt, hàng ghế sau của XFORCE cho phép ngả tới 8 cấp độ."
    },
    {
      type: "p",
      text:
        "Về giải trí, cụm màn hình trung tâm trên Mitsubishi XFORCE cũng có kích thước vượt trội hơn hẳn – lên tới 12,3 inch – so với con số 10,25 inch trên Hyundai Creta."
    },
    {
      type: "p",
      text:
        "Trong khi hệ thống giải trí của Hyundai Creta được trang bị đầy đủ các kết nối thông minh tiêu chuẩn như Apple CarPlay hay Android Auto; màn hình của Mitsubishi XFORCE thậm chí hỗ trợ cả kết nối WebLink – cho phép chia sẻ hiển thị của toàn bộ điện thoại lên màn hình trung tâm."
    },
    {
      type: "p",
      text:
        "Về âm thanh giải trí, Hyundai Creta phiên bản cao cấp nhất được trang bị hệ thống âm thanh hàng hiệu Bose. Trong khi đó, Mitsubishi XFORCE sử dụng hệ thống âm thanh Dynamic Sound Yamaha Premium do đội ngũ kỹ sư Nhật Bản trực tiếp phát triển."
    },
    {
      type: "p",
      text:
        "Về các tiện ích khác, cả Creta và XFORCE cùng sở hữu phanh tay điện tử kèm Auto Hold; cổng sạc cho cả 2 hàng ghế; điều hoà tự động, cùng vô số tiện nghi hữu ích khác để tối ưu trải nghiệm người dùng."
    },
    {
      type: "p",
      text:
        "Về sức mạnh vận hành, Mitsubishi lựa chọn cho XFORCE một cấu hình rất vừa miếng, với động cơ 1.5L MIVEC, cho công suất 105 mã lực và mô-men xoắn 141 Nm. Còn đại diện Hàn Quốc – Hyundai Creta – dùng máy SmartStream 1.5L hút khí tự nhiên với sức mạnh cực đại 113 HP và 144 Nm lực kéo. Cả hai mẫu xe đều sử dụng hệ dẫn động cầu trước; hộp số vô cấp và bốn phanh đĩa."
    },
    {
      type: "p",
      text:
        "Đặc biệt, các kỹ sư Nhật Bản còn trang bị cho Mitsubishi XFORCE tới 4 chế độ lái và tính năng AYC giúp xe vào cua an toàn hơn. Còn đại diện Hàn Quốc Hyundai Creta lại sở hữu hàng loạt tính năng an toàn chủ động vượt trội trong hệ thống SmartSense, gồm: phanh tự động trước & sau, giữ làn, đèn pha/cốt/chuyển làn tự động…"
    },
    {
      type: "p",
      text:
        "Dù chưa ra mắt tại Việt Nam, song nhiều đại lý cũng đã bắt đầu nhận đặt cọc Mitsubishi XFORCE với mức giá dự đoán trong khoảng 700 – 800 triệu đồng. Đây chắc chắn sẽ là một yếu tố cần nhắc, bởi đối thủ Hyundai Creta đang được nhà phân phối Thành Công bán ra với 3 phiên bản, có giá chỉ từ 640 – 745 triệu đồng – tính ra là dễ tiếp cận hơn."
    },
    {
      type: "p",
      text:
        "Cùng với đó, Mitsubishi XFORCE cũng sẽ còn phải đối đầu với đối thủ khác đã nhanh chân ra mắt thị trường vào tháng 9 – đó chính là Toyota Yaris Cross. Còn rất nhiều cái tên quen thuộc khác đã có mặt lâu năm và khẳng định được vị thế vững mạnh của mình, như Kia Seltos, Mazda CX-3 hay Peugeot 2008. Sự xuất hiện của XFORCE chắc chắn sẽ làm phân khúc CUV cỡ B nóng hơn bao giờ hết."
    }
  ]
},
{
  slug: "triton-nang-cap-phanh-dia-bon-banh-bang-dong-ho-ky-thuat-so",
  blocks: [
    {
      type: "h2",
      text:
        "Mitsubishi Triton sẽ được nâng cấp: phanh đĩa bốn bánh và bảng đồng hồ lái kỹ thuật số"
    },

    {
      type: "p",
      text:
        "Mặc dù Triton thế hệ thứ 6 mới ra mắt chưa lâu nhưng Mitsubishi đã dự tính tiếp tục nâng cấp mẫu xe bán tải này với cụm đồng hồ lái kỹ thuật số và phanh đĩa bốn bánh."
    },
    {
      type: "p",
      text:
        "Thông thường các nhà sản xuất ô tô bắt đầu việc nâng cấp khá sớm nhưng những kế hoạch này hiếm khi được tiết lộ công khai. Ngược lại với xu hướng đó, Yoshiki Masuda, Kỹ sư trưởng của Mitsubishi, đã thẳng thắn chia sẻ với giới truyền thông Australia về những dự định cho tương lai của Triton."
    },
    {
      type: "p",
      text:
        "Theo báo cáo của CarExpert, Masuda cho biết Mitsubishi muốn bổ sung phanh đĩa sau cho dòng xe bán tải này thay thế cho cụm phanh tang trống, bất chấp việc trọng lượng xe có thể tăng lên đáng kể."
    },
    {
      type: "p",
      text:
        "Với phanh đĩa sau, Mitsubishi Triton sẽ tương thích với nhiều tính năng an toàn chủ động ADAS hơn. Ngoài ra, hệ thống phanh mới còn giúp cải thiện hiệu suất vận hành của xe."
    },
    {
      type: "p",
      text:
        "Hiện nay, phần lớn các đối thủ của Mitsubishi Triton trong phân khúc bán tải hạng trung như Toyota Hilux hay Nissan Navara đều dùng phanh tang trống phía sau. Tuy nhiên, Ford Ranger và Volkswagen Amarok đã trang bị phanh đĩa sau trên các phiên bản cao cấp. Trong khi đó, những mẫu bán tải điện đến từ các thương hiệu Trung Quốc như Great Wall Motor hay SAIC được lắp phanh đĩa sau ngay từ phiên bản tiêu chuẩn."
    },
    {
      type: "p",
      text:
        "Ngoài việc nâng cấp hệ thống phanh, trong tương lai, Mitsubishi Triton còn được bổ sung bảng đồng hồ lái kỹ thuật số. Hiện tại, xe chỉ dùng cụm đồng hồ analog với màn hình đa thông tin 7 inch ở giữa. Outlander đang dùng màn hình đồng hồ lái 12,3 inch và rất có thể đây sẽ là loại màn hình được trang bị cho Triton thế hệ kế tiếp."
    },
    {
      type: "p",
      text:
        "Ông Yoshiki Masuda chưa cho biết mốc thời gian cụ thể để Triton áp dụng những thay đổi nói trên. Phiên bản nâng cấp giữa vòng đời thường ra mắt sau ít nhất 4 năm, nhưng nhiều khả năng hãng sẽ bổ sung một số hạng mục sớm hơn dưới dạng các bản cập nhật nhỏ."
    },
    {
      type: "p",
      text:
        "Trong cuộc gặp gỡ với giới truyền thông Úc, Masuda xác nhận Triton mới là một dự án do Mitsubishi thực hiện “từ A đến Z” – bao gồm khung gầm dạng bậc thang, động cơ turbodiesel và toàn bộ quá trình thiết kế, phát triển. Chuyên gia này cũng cho biết sự hỗ trợ của hai thương hiệu còn lại trong liên minh Renault–Nissan–Mitsubishi chỉ dừng ở mức “trao đổi một số thông tin”."
    }
  ]
}



];

export default newsArticles;
