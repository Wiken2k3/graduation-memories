"use client";

import Image from "next/image";

interface Props {
  image: string;
  index: number;
  onOpen: (index: number) => void;
}

export default function GalleryCard({
  image,
  index,
  onOpen,
}: Props) {
  return (
    <button
      onClick={() => onOpen(index)}
      className="
      group
      relative
      aspect-square
      overflow-hidden
      rounded-3xl
      border
      border-[#ECE6DA]
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
      "
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="33vw"
        className="
        object-cover
        transition
        duration-700
        group-hover:scale-105
        "
      />
    </button>
  );
}