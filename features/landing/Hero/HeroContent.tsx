import ScrollButton from "./ScrollButton";

export default function HeroContent() {
  return (
    <div
      className="
        order-2

        w-full

        mx-auto

        max-w-xl

        text-center

        lg:order-1

        lg:mx-0

        lg:text-left
      "
    >

      <p
        className="
          uppercase

          tracking-[0.45em]

          text-[#7298C7]

          text-xs

          font-semibold
        "
      >
        Graduation 2026
      </p>


      <h1
        className="
          mt-6

          text-5xl

          sm:text-6xl

          lg:text-7xl

          font-semibold

          leading-none
        "
      >
        Chào cậu.
      </h1>


      <p
        className="
          mt-8

          text-lg

          leading-9

          text-neutral-600
        "
      >
        Một món quà nhỏ.
        <br />
        Một lời cảm ơn.
      </p>


      <div
        className="
          mt-12

          flex

          justify-center

          lg:justify-start
        "
      >
        <ScrollButton />
      </div>


    </div>
  );
}