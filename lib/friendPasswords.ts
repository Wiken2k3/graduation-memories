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
  "trieu-vinh": "0711",
  "thanh-truong": "0410",
  "me": "0000",
  "thai-tuan": "0000",
  "thanh-thao": "0000",
  "trung-hieu": "0000",
  "tuan-kiet": "0000",
  "thanh-truc": "0000",
} as const;

export type FriendPasswordSlug = keyof typeof friendPasswords;
