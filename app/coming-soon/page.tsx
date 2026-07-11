import Container from "@/components/layout/Container";

import Countdown from "./Countdown";
import ComingCard from "./ComingCard";

export default function ComingSoonPage() {

  return (
    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F5F1E6]
      "
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-56 right-[-200px] h-[650px] w-[650px] rounded-full bg-[#7298C7]/15 blur-[120px]" />

        <div className="absolute bottom-[-220px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#F3D98F]/20 blur-[120px]" />

        <div className="hero-noise" />

      </div>

      <Container className="relative z-10 flex min-h-screen items-center">

        <div
          className="
          grid
          items-center
          gap-20

          lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#7298C7]
              text-sm
              font-semibold
              "
            >
              Graduation 2026
            </p>

            <h1
              className="
              mt-6

              text-5xl

              font-semibold

              leading-tight

              md:text-7xl
              "
            >
              Món quà này
              <br />
              vẫn đang được
              <br />
              chuẩn bị.
            </h1>

            <p
              className="
              mt-10

              max-w-xl

              text-lg

              leading-9

              text-neutral-600
              "
            >
              Có lẽ cậu đã quét mã QR sớm hơn mình dự đoán một chút.

              <br /><br />

              Mình vẫn đang chọn những bức ảnh đẹp nhất,
              hoàn thiện những lời nhắn cuối cùng
              và chuẩn bị thật chỉn chu để gửi đến từng người.

              <br /><br />

              Mình hy vọng khi cậu quay lại,
              đây sẽ không chỉ là một website,
              mà sẽ là một cuốn kỷ niệm nhỏ của cả quãng thời gian đại học.
            </p>

            <Countdown />

            <div
              className="
              mt-12

              inline-flex

              rounded-full

              border

              border-[#DDD6CB]

              bg-white/70

              px-6

              py-3

              backdrop-blur
              "
            >
              Hẹn gặp cậu khoảng sau 3 ngày của buổi tốt nghiệp nhé 💙
            </div>

            <p className="mt-10 text-neutral-500">
              — Quốc Tuấn
            </p>

          </div>

          {/* RIGHT */}

          <ComingCard />

        </div>

      </Container>

    </main>
  );
}