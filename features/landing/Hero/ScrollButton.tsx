"use client";

export default function ScrollButton() {
  const handleClick = () => {
    const section = document.getElementById("memory-wall");

    if (!section) return;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      40;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Cuộn tới Memory Wall"
      className="
      group

      inline-flex

      items-center

      gap-3

      rounded-full

      border

      border-[#D7D1C7]

      bg-white/80

      px-7

      py-4

      font-medium

      backdrop-blur

      transition-all

      duration-500

      hover:-translate-y-1

      hover:border-[#7298C7]

      hover:shadow-xl
      "
    >
      <span>Đi thẳng tới món quà</span>

      <span
        className="
        text-lg

        transition-transform

        duration-500

        group-hover:translate-y-1
        "
      >
        ↓
      </span>
    </button>
  );
}