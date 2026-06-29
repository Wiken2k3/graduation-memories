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
    id: 1,
    slug: "nguyen-minh",
    name: "Nguyễn Minh",
    image: "/images/demo.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/images/demo.webp",
      "/images/demo.webp",
      "/images/demo.webp",
    ],
  },
  {
    id: 2,
    slug: "tran-long",
    name: "Trần Long",
    image: "/images/demo.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/images/demo.webp",
      "/images/demo.webp",
      "/images/demo.webp",
    ],
  },
  {
    id: 3,
    slug: "pham-ha",
    name: "Phạm Hà",
    image: "/images/demo.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/images/demo.webp",
      "/images/demo.webp",
      "/images/demo.webp",
    ],
  },
  {
    id: 4,
    slug: "gia-huy",
    name: "Gia Huy",
    image: "/images/demo.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/images/demo.webp",
      "/images/demo.webp",
      "/images/demo.webp",
    ],
  },
  {
    id: 5,
    slug: "lan-anh",
    name: "Lan Anh",
    image: "/images/demo.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/images/demo.webp",
      "/images/demo.webp",
      "/images/demo.webp",
    ],
  },
  {
    id: 6,
    slug: "quoc-tuan",
    name: "Quốc Tuấn",
    image: "/images/demo.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/images/demo.webp",
      "/images/demo.webp",
      "/images/demo.webp",
    ],
  },
];