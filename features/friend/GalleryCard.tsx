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
      className="group relative overflow-hidden rounded-[24px] border border-[#E9E2D4] transition duration-300 hover:-translate-y-1 hover:border-[#7298C7]/50"
      aria-label={`Mở ảnh ${index + 1}`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-[24px]">
        <Image
          src={image}
          alt={`Ảnh kỷ niệm ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </button>
  );
}