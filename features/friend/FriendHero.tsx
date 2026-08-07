import Image from "next/image";
import Container from "@/components/layout/Container";
import { Friend } from "@/data/friends";

interface Props {
  friend: Friend;
}

export default function FriendHero({ friend }: Props) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-[28px] border border-[#E9E2D4] bg-[#FFFDF8] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="aspect-[4/5] sm:aspect-[11/14] relative">
              <Image
                src={friend.image}
                alt={`Ảnh của ${friend.name}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7298C7]">
              GRADUATION 2026
            </p>

            <div>
              <h1 className="text-4xl font-semibold leading-tight text-[#272727] sm:text-5xl">
                Xin chào,
                <br />
                <span className="text-[#7298C7]">{friend.name}</span>.
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-9 text-[#444] sm:text-xl">
              Một góc nhỏ mình dành riêng cho cậu.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}