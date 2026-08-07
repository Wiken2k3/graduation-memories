import Container from "@/components/layout/Container";
import { Friend } from "@/data/friends";

interface Props {
  friend: Friend;
}

export default function FriendMessage({ friend }: Props) {
  return (
    <section className="py-8 sm:py-10">
      <Container className="max-w-4xl">
        <div className="rounded-[32px] border border-[#E9E2D4] bg-[#FFFDF8] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] sm:p-10">
          <div className="mb-6 flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7298C7]">Thư gửi bạn</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#272727] sm:text-4xl">
              Gửi {friend.name},
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[#5F5B56] sm:text-base">
              Một bức thư nhẹ nhàng ghi lại chút cảm xúc và lời chúc dành riêng cho cậu.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#E9E2D4] bg-white p-7 shadow-[0_15px_35px_rgba(0,0,0,0.04)] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[#7298C7]/20 before:content-['']">
            <div className="whitespace-pre-line text-[1rem] leading-8 text-[#444] sm:text-[1.02rem]">
              {friend.message}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-[24px] border border-[#E9E2D4] bg-[#F7F4EC] p-5 text-[#444] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#7298C7]">Nét chân thành</p>
              <p className="mt-2 text-base leading-7 text-[#272727]">
                Những lời này được viết ra bằng cả tấm lòng.
              </p>
            </div>
            <p className="text-base font-semibold text-[#272727]">— Quốc Tuấn</p>
          </div>
        </div>
      </Container>
    </section>
  );
}