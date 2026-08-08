import Image from "next/image";

export default function HeroPortrait() {
  return (
    <div className="relative flex justify-center">

      <div
        className="
        absolute

        h-[420px]
        w-[420px]

        rounded-full

        bg-[#7298C7]/20

        blur-[120px]
        "
      />

      <div
        className="
        relative

        w-full

        max-w-[430px]

        rounded-[40px]

        bg-white/70

        backdrop-blur-xl

        p-5

        shadow-[0_35px_90px_rgba(0,0,0,.15)]
        "
      >

        <div
          className="
          relative

          aspect-[4/5]

          overflow-hidden

          rounded-[30px]
          "
        >
          <Image
            src="/images/hero/pre4.webp"
            alt=""
            fill
            loading="eager"
            sizes="(max-width:640px) 280px, (max-width:1024px) 340px, 430px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}