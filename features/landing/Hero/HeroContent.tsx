import ScrollButton from "./ScrollButton";

export default function HeroContent() {
  return (
    <div
      className="
      order-2
      lg:order-1

      max-w-2xl
      "
    >
      <p
        className="
        text-xs

        font-semibold

        uppercase

        tracking-[0.35em]

        text-[#7298C7]
        "
      >
        Graduation 2026
      </p>

      <h1
        className="
        mt-6

        text-5xl

        font-semibold

        leading-[1.05]

        sm:text-6xl

        xl:text-7xl
        "
      >
        Chào cậu.
      </h1>

      <p
        className="
        mt-8

        max-w-lg

        text-lg

        leading-9

        text-neutral-600
        "
      >
        Cảm ơn vì đã là một phần
        của những năm tháng thanh xuân.

        <br />
        <br />

        Đây là món quà nhỏ mình dành riêng cho cậu.
      </p>

      <div className="mt-12">
        <ScrollButton />
      </div>
    </div>
  );
}