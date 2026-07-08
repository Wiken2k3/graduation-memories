"use client";

export default function ScrollIndicator() {
  return (
    <div
      className="
      absolute

      bottom-8

      left-1/2

      -translate-x-1/2
      "
    >
      <div
        className="
        flex

        h-14
        w-8

        justify-center

        rounded-full

        border
        border-[#CFC7BA]
        "
      >
        <div
          className="
          mt-2

          h-3
          w-3

          animate-bounce

          rounded-full

          bg-[#7298C7]
          "
        />
      </div>
    </div>
  );
}