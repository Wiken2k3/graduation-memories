export interface Friend {
  id: number;
  slug: string;
  name: string;
  image: string;
  message: string;
  gallery: string[];
}

export const friends: Friend[] = [
  {
    id: 12,
    slug: "me",
    name: "Mẹ",
    image: "/polaroids/me.webp",
    message: `Mẹ là người đã luôn ở bên và tiếp thêm sức mạnh cho con trong mọi bước đi. Cảm ơn mẹ vì tất cả yêu thương và sự hy sinh vô điều kiện.`,
    gallery: [
      "/polaroids/me.webp",
    ],
  },
  {
    id: 1,
    slug: "Ba",
    name: "Ba",
    image: "/polaroids/fathe.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học!

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/ba1.webp",
    ],
  },
  {
    id: 2,
    slug: "huy",
    name: "Gia Huy",
    image: "/polaroids/dghuy.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/dghuy.webp",
    ],
  },
  {
    id: 3,
    slug: "bphuong",
    name: "Bích Phương",
    image: "/polaroids/bphuong.webp",
    message: `Gửi công chúa Ninh Bình 👸
  Đầu tiên là tớ rất rất biết ơn vì cậu đã dành chút thời gian để đến chúc mừng tớ. Mặc dù chỉ ghé một chút thôi nhưng tớ vẫn thấy rất quý, vì cậu không ngại đường xa và sắp xếp thời gian để đến với tớ.

  Cậu là người bạn mà từ cấp 3 đến giờ (cũng phải 8 năm rùi ha) tớ thấy gần như chẳng thay đổi gì cả. Lúc nào cậu cũng tốt bụng, hiền, dĩa huông, hơi ngại xíu hoii. Nhưng hễ có chuyện gì mà cậu giúp được thì cậu đều sẵn sàng giúp.

  Cảm ơn cậu rất nhiều vì đã dành khoảng thời gian ít ỏi của mình để đến chung vui với tớ.

  Chúc cậu sẽ thật thành công trên hành trình mà cậu đã chọn nhé.

  Như tớ đã nói với cậu gùi: “Nếu có cần gì mà tớ có thể giúp được, hay có chuyện gì muốn chia sẻ thì đừng ngại nhé. Tớ lun okii hết nhen.”

  À còn nữa, tháng 1 tốt nghiệp nhớ phải mời tớ đó nha. Tớ chắc chắn sẽ tới.

  Thanks for all. 💝🫶🏻`,
    gallery: [
      "/polaroids/bphuong.webp",
      "/images/gra/bphuong/bphuong1.png",
      "/images/gra/bphuong/bphuong2.png",
      "/images/gra/bphuong/bphuong3.png",
      "/images/gra/bphuong/bphuong4.png",
      "/images/gra/bphuong/bphuong5.png",
    ],
  },
  {
    id: 4,
    slug: "judy",
    name: "Judy",
    image: "/polaroids/judy1.webp",
    message: `Xin chào Judy ྀི 💝

    Cảm ơn cậu đã dành chút thời gian đến chúc mừng tớ. Tớ biết với con gái thì để chuẩn bị cho một ngày quan trọng như thế này cũng mất khá nhiều thời gian, nên tớ thật sự rất rất biết ơn vì cậu đã đến.

    Cậu biết hong, trong suốt khoảng thời gian học (mặc dù chỉ học chung một môn hoy) rồi sau đó có dịp tiếp xúc với cậu ở Social, tớ luôn cảm thấy cậu là một người bạn rất khác biệt so với những người tớ từng gặp.

    Trong lớp, cậu rất tự tin. Ấn tượng đầu tiên của tớ về cậu là lúc cậu lên phát biểu. Kiểu cậu có thể thoải mái nói lên suy nghĩ của mình trước mọi người mà không quá bận tâm người khác sẽ nghĩ gì. Cảm giác như cậu có một “aura” rất riêng vậy.

    Còn ngoài đời, cậu là một cô bé yêu đời, biết mình muốn gì và không chạy theo bất kỳ xu hướng nào trên mạng xã hội. Tớ thật sự rất thích tính cách đó của cậu.

    Cậu với tớ cũng tốt nghiệp cùng một đợt nữa. Hi vọng chặng đường sắp tới sẽ mang đến cho cậu thật nhiều điều tốt đẹp và cậu sẽ thành công với con đường mình đã chọn nhé.

    À, còn một điều nữa tớ muốn nói. Nếu một ngày nào đó cậu muốn tâm sự, hoặc đơn giản chỉ muốn nói chuyện xàm xí thôi thì đừng ngại nha. Tớ luôn sẵn sàng lắng nghe cậu, hehee.

    Cảm ơn cậu vì tất cảaa. 💝`,
    gallery: [
      "/polaroids/judy5.png",
      "/polaroids/judy2.webp",
      "/polaroids/judy3.webp",
    ],
  },
  {
    id: 5,
    slug: "nhu-nguyen",
    name: "Quỳnh Như",
    image: "/polaroids/nhunguyen.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/nhunguyen.webp",
    ],
  },
  {
    id: 6,
    slug: "khanh-vinh",
    name: "Khánh Vinh",
    image: "/polaroids/kvinh.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/vinhnguyen.webp",

      "/polaroids/kvinh.webp",
      "/images/gra/avan.png",
      "/images/gra/avan1.png",
      "/images/gra/avan3.png",
      "/images/gra/vinh/KV_05913.jpg",
      "/images/gra/vinh/KV_05911.jpg",
      "/images/gra/vinh/KV_05909.jpg",
      "/images/gra/vinh/KV_05907.jpg",
      "/images/gra/vinh/KV_05857.jpg",
      "/images/gra/vinh/KV_05855.jpg",
      "/images/gra/vinh/KV_05853.jpg",
      "/images/gra/vinh/KV_05840.jpg",
      "/images/gra/vinh/KV_05838.jpg",
      "/images/gra/vinh/KV_05836.jpg",
      "/images/gra/vinh/KV_05834.jpg",
      "/images/gra/vinh/KV_05833.jpg",
      "/images/gra/vinh/KV_05832.jpg",
      "/images/gra/vinh/truong.jpg",

      
    ],
  },
  {
    id: 7,
    slug: "anh-thu",
    name: "Anh Thư",
    image: "/polaroids/athu.webp",
    message: `Cảm ơn Thư vì những kỷ niệm và nụ cười đã chia sẻ cùng mình.

Mong rằng mọi điều tốt đẹp sẽ đến với cậu sau này.`,
    gallery: [
      "/polaroids/athu.webp",
      "/polaroids/nhunguyen.webp",
    ],
  },
  {
    id: 8,
    slug: "gia-hung",
    name: "Gia Hưng",
    image: "/polaroids/cun.webp",
    message: `Cảm ơn Hưng vì đã luôn sẵn sàng giúp đỡ và cùng nhau vượt qua thử thách.

Chúc cậu thành công và giữ liên lạc nhé.`,
    gallery: [
      "/polaroids/cun.webp",
      "/images/gra/Cun/KV_05913.jpg",
      "/images/gra/Cun/KV_05911.jpg",
      "/images/gra/Cun/KV_05909.jpg",
      "/images/gra/Cun/KV_05907.jpg",
      "/images/gra/Cun/KV_05906.jpg",
      "/images/gra/Cun/KV_05904.jpg",
      "/images/gra/Cun/KV_05902.jpg",
      "/images/gra/Cun/KV_05883.jpg",
      "/images/gra/Cun/KV_05880.jpg",
      "/images/gra/Cun/KV_05879.jpg",
      "/images/gra/Cun/KV_05850.jpg",
      "/images/gra/Cun/KV_05848.jpg",
      "/images/gra/Cun/KV_05846.jpg",
      "/images/gra/Cun/KV_05844.jpg",
      "/images/gra/Cun/KV_05842.jpg",
      "/images/gra/Cun/KV_05840.jpg",
      "/images/gra/Cun/KV_05838.jpg",
      "/images/gra/Cun/KV_05836.jpg",
      "/images/gra/Cun/KV_05834.jpg",
      "/images/gra/Cun/KV_05833.jpg",
      "/images/gra/Cun/KV_05832.jpg",
      

    ],
  },
  {
    id: 9,
    slug: "phuong-thu",
    name: "Phương Thư",
    image: "/polaroids/pthu.webp",
    message: `Một lời cảm ơn nhỏ gửi đến Thư vì tất cả những khoảnh khắc đáng nhớ.

Chúc cậu luôn hạnh phúc và vững bước.`,
    gallery: [
      "/polaroids/pthu.webp",
      "/images/gra/avan.png",
      "/images/gra/avan1.png",
      "/images/gra/avan3.png",
      "/images/gra/pthu/KV_05924.jpg",
      "/images/gra/pthu/KV_05926.jpg",
      "/images/gra/pthu/KV_05931.jpg",
      "/images/gra/pthu/KV_05933.jpg",
      "/images/gra/pthu/KV_05948.jpg",
      "/images/gra/pthu/KV_05949.jpg",
      "/images/gra/pthu/KV_05951.jpg",
      "/images/gra/pthu/KV_05953.jpg",
      "/images/gra/pthu/KV_05955.jpg",
    ],
  },
  {
    id: 10,
    slug: "trieu-vinh",
    name: "Triều Vinh",
    image: "/polaroids/tvinh.webp",
    message: `Hí nhô cậu ! 💛

    Cảm ơn cậu đã bớt chút thời gian trong công việc để đến chung vui với tớ. Tớ thật sự rất rất biết ơn điều đó hí ^^.

    Zâu, đối với riêng tớ nha (ý kiến cá nhân thui), cậu là một trong số ít những người bạn mà tớ quen ở đại học. Mặc dù tụi mình chưa quen nhau quá lâu, nhưng tớ lại thấy cậu có mindset khá giống với tớ. Từ sở thích, cách giao tiếp cho đến cách nhìn nhận mọi thứ, nhiều lúc tớ thấy tụi mình có khá nhiều điểm chung.

    Chắc cũng vì vậy mà mỗi lần nói chuyện với cậu, tớ đều có cảm giác rất thoải mái. Không cần phải cố gắng bắt chuyện hay nghĩ xem nên nói gì tiếp theo, cứ tự nhiên là câu chuyện lại nối tiếp câu chuyện.

    Hi vọng sau này, dù mỗi đứa có theo đuổi con đường riêng thì vẫn sẽ có dịp ngồi cà phê, nói chuyện xàm xí .

    Chúc cậu sẽ luôn thành công trên hành trình mà cậu đã chọn nhé.

    Cảm ơn cậu gấtt gất nhìuuu. 💛`,
    gallery: [
      "/images/gra/vinhpre.png",
      "/images/gra/amazon1.png",
      "/images/gra/amazon2.png",
    ],
  },
  {
    id: 11,
    slug: "thanh-truong",
    name: "Thanh Trường",
    image: "/polaroids/truong.webp",
    message: `Hí nhô người bạn Hoàng Da mang dòng máu quỷ của tớ! 😈

    Tớ biết hôm buổi tốt nghiệp của tớ diễn ra thì cậu đang dính lịch ở công ty và phải thu xếp để có mặt chung vui cùng tớ. Tớ thật sự rất rất biết ơn vì cậu đã dành chút thời gian đến tham dự.

    Béo là người bạn mà trong suốt những năm đại học, mỗi khi tớ cần là luôn sẵn sàng hỗ trợ tận tình. Tui với ông kiểu như Doraemon với Nobita vậy á. Cần gì mà giúp được là đều có mặt hết.

    Cảm ơn Béo vì tất cả nhé. Chúc Béo iu sẽ luôn đạt được những điều mình mong đợi trên con đường đã chọn.

    Và… mãi là người Hoàng Da Rê An Ma Rít nhé. Kekeke. 🤍`,
    gallery: [
      "/polaroids/truong.webp",
    ],
  },
  {
    id: 13,
    slug: "thai-tuan",
    name: "Thái Tuấn",
    image: "/polaroids/ttuan.webp",
    message: `Cảm ơn Tuấn vì đã cùng chia sẻ những niềm vui và kỷ niệm trong những ngày đại học. Chúc cậu luôn vững bước và thành công.`,
    gallery: [
      "/polaroids/ttuan.webp",
    ],
  },
  {
    id: 14,
    slug: "thanh-thao",
    name: "Thanh Thảo",
    image: "/polaroids/pii.webp",
    message: `Cảm ơn Thảo vì sự chân thành và nụ cười luôn rạng rỡ. Chúc cậu giữ được năng lượng tích cực và bay cao trong tương lai.`,
    gallery: [
      "/polaroids/pii.webp",
    ],
  },
  {
    id: 15,
    slug: "trung-hieu",
    name: "Trung Hiếu",
    image: "/polaroids/bon.webp",
    message: `Cảm ơn Hiếu vì những khoảnh khắc đáng nhớ mà cậu đã góp mặt. Chúc cậu luôn khỏe mạnh và đạt được nhiều điều tốt đẹp.`,
    gallery: [
      "/polaroids/bon.webp",
    ],
  },
  {
    id: 16,
    slug: "tuan-kiet",
    name: "Tuấn Kiệt",
    image: "/polaroids/myzon.webp",
    message: `Cảm ơn Kiệt vì sự hỗ trợ và tinh thần đồng đội trong suốt quãng thời gian qua. Chúc cậu sớm chạm tới những mục tiêu của mình.`,
    gallery: [
      "/polaroids/myzon.webp",
    ],
  },
  {
    id: 17,
    slug: "thanh-truc",
    name: "Thanh Trúc",
    image: "/polaroids/truc.webp",
    message: `Cảm ơn Trúc vì những phút giây chia sẻ và nụ cười ấm áp. Chúc cậu luôn hạnh phúc và gặp nhiều may mắn.`,
    gallery: [
      "/polaroids/truc.webp",
    ],
  },
];