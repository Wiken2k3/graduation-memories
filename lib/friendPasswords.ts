export const friendPasswords = {
  Ba: "2412",
  huy: "0208",
  bphuong: "2602",
  judy: "judy",
  "nhu-nguyen": "1507",
  "khanh-vinh": "1234",
  "anh-thu": "0903",
  "gia-hung": "0309",
  "phuong-thu": "1212",
  "trieu-vinh": "0305",
  "thanh-truong": "2005",
  "me": "0910",
  "thai-tuan": "ttuan@",
  "thanh-thao": "tthao@",
  "trung-hieu": "bon@",
  "tuan-kiet": "myzon@",
  "thanh-truc": "ttruc@",
} as const;

export type FriendPasswordSlug = keyof typeof friendPasswords;
