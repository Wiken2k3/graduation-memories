import Image from "next/image";

import FloatingCard from "./FloatingCard";

export default function HeroImages() {
  return (
    <div
      className="
      order-1
      lg:order-2

      relative

      flex

      justify-center
      "
    >
      {/* Polaroid trái */}

      <div
        className="
        absolute

        left-0

        top-10

        hidden

        lg:block
        "
      >
        <FloatingCard
          image="/images/hero/pre1.webp"
          className="w-40 rotate-[-10deg]"
        />
      </div>

      {/* Polaroid phải */}

      <div
        className="
        absolute

        right-0

        bottom-12

        hidden

        xl:block
        "
      >
        <FloatingCard
          image="/images/hero/pre2.webp"
          className="w-40 rotate-[8deg]"
        />
      </div>

      {/* Main Card */}

      <div
        className="
        relative

        w-full

        max-w-[340px]

        sm:max-w-[400px]

        lg:max-w-[460px]

        rounded-[34px]

        paper

        p-5

        shadow-[0_30px_80px_rgba(0,0,0,.12)]
        "
      >
        <div
          className="
          relative

          aspect-[4/5]

          overflow-hidden

          rounded-3xl
          "
        >
          <Image
            src="/images/hero/pre4.webp"
            alt="Graduation portrait"
            fill
            priority
            sizes="(max-width:768px)100vw,460px"
            className="object-cover"
          />
        </div>

        <div className="pt-6">

          <p
            className="
            text-xs

            uppercase

            tracking-[0.3em]

            text-[#7298C7]
            "
          >
            Graduation 2026
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            Quốc Tuấn
          </h3>

        </div>
      </div>
    </div>
  );
}