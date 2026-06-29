import Container from "@/components/layout/Container";
import { Friend } from "@/data/friends";

interface Props {
  friend: Friend;
}

export default function FriendMessage({ friend }: Props) {
  return (
    <section className="py-32">
      <Container className="max-w-5xl">
        {/* TITLE */}
        <h2
          className="
            mb-10
            text-3xl
            font-semibold
            sm:text-4xl
            lg:text-5xl
          "
        >
          Gửi cậu.
        </h2>

        {/* LETTER */}
        <div
          className="
            rounded-[28px]
            bg-[#FFFDF8]
            border
            border-[#ECE6DA]
            p-7
            sm:p-10
            lg:p-14
            leading-10
            shadow-[0_20px_60px_rgba(0,0,0,.08)]
          "
        >
          {/* OPENING */}
          <p className="mb-10 text-2xl font-medium">
            Gửi {friend.name},
          </p>

          {/* BODY */}
          <div
            className="
              whitespace-pre-line
              text-[18px]
              leading-10
              text-[#444]
            "
          >
            {friend.message}
          </div>

          {/* CLOSING */}
          <div className="mt-14">
            <p>
              Chúc cậu luôn thành công trên hành trình phía trước.
            </p>

            <p className="mt-6 font-semibold">
              — Quốc Tuấn
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}