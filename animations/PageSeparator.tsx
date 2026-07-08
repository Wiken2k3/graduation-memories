export default function PageSeparator() {
  return (
    <div className="relative h-28">

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-px
        w-[82%]
        -translate-x-1/2
        bg-[#DDD2C0]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-1/2

        h-12
        w-12

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        border

        border-[#DDD2C0]

        bg-[#FFFDF8]
        "
      />

    </div>
  );
}