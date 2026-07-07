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
    slug: "Ba",
    name: "Ba",
    image: "/polaroids/ba.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/ba.webp",
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
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
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
    ],
  },
  {
    id: 3,
    slug: "bphuong",
    name: "Bích Phương",
    image: "/polaroids/bphuong.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/bphuong.webp",
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
    ],
  },
  {
    id: 4,
    slug: "judy",
    name: "Judy",
    image: "/polaroids/judy.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/judy.webp",
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
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
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
    ],
  },
  {
    id: 6,
    slug: "khanh-vinh",
    name: "Khánh Vinh",
    image: "/polaroids/vinhnguyen.webp",
    message: `Cảm ơn cậu vì đã đồng hành cùng mình trong suốt những năm đại học.

Hy vọng sau này dù mỗi người một con đường nhưng chúng ta vẫn sẽ gặp lại nhau.`,
    gallery: [
      "/polaroids/vinhnguyen.webp",
      "/polaroids/nhunguyen.webp",
      "/polaroids/nhunguyen.webp",
    ],
  },
];