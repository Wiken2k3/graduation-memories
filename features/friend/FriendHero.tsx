import Image from "next/image";
import Container from "@/components/layout/Container";
import { Friend } from "@/data/friends";

interface Props {
  friend: Friend;
}

export default function FriendHero({ friend }: Props) {
  return (
    <section className="py-24">
      <Container className="max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* IMAGE */}
          <div
            className="
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-[26px]
              border
              border-[#ECE6DA]
              shadow-[0_25px_80px_rgba(0,0,0,.08)]
            "
          >
            <Image
              src={friend.image}
              alt={friend.name}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            {/* EYEBROW */}
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7298C7]">
              GRADUATION 2026
            </p>

            {/* TITLE */}
            <h1
              className="
                mt-5
                text-4xl
                font-semibold
                leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Xin chào,
              <br />
              <span className="text-[#7298C7]">{friend.name}</span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                text-lg
                leading-9
                sm:text-xl
                text-neutral-600
              "
            >
              Đây là một góc nhỏ mình dành riêng cho cậu.
            </p>

            {/* DIVIDER */}
            <div className="mt-10 h-px w-24 bg-[#7298C7]" />
          </div>
        </div>
      </Container>
    </section>
  );
}