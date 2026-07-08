import Image from "next/image";

interface Props {
  image: string;
  className?: string;
}

export default function FloatingCard({
  image,
  className = "",
}: Props) {
  return (
    <div
      className={`
        absolute

        w-40

        paper

        p-3

        shadow-xl

        animate-[float_6s_ease-in-out_infinite]

        ${className}
      `}
    >

      <div
        className="
          relative

          aspect-[4/5]

          overflow-hidden

          rounded-2xl
        "
      >

        <Image
          fill
          src={image}
          alt=""
          sizes="160px"
          className="
            object-cover
          "
        />

      </div>

    </div>
  );
}