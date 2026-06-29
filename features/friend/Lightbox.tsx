"use client";

import { useEffect } from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

interface Props {
  images: string[];
  current: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({
  images,
  current,
  onClose,
  onNext,
  onPrevious,
}: Props) {
  useEffect(() => {
    if (current === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, onClose, onNext, onPrevious]);

  if (current === null) return null;

  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/80 backdrop-blur-md

        px-4 sm:px-8
        py-6
      "
      onClick={onClose}
    >
      {/* CONTENT */}
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE WRAPPER */}
        <div
          className="
            relative
            h-[70vh] sm:h-[80vh]
            w-full
            rounded-2xl
            overflow-hidden
            border border-white/10
            shadow-2xl
          "
        >
          <Image
            src={images[current]}
            alt=""
            fill
            sizes="100vw"
            className="object-contain bg-black/20"
          />
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 sm:top-5 sm:right-5

            rounded-full
            bg-white/90
            px-3 py-2 sm:px-4 sm:py-2

            text-sm sm:text-base
            font-medium

            shadow-md
            transition hover:scale-105
          "
        >
          ✕
        </button>

        {/* COUNTER */}
        <div
          className="
            absolute top-4 left-1/2
            -translate-x-1/2

            rounded-full
            bg-white/90
            px-4 py-2 sm:px-5 sm:py-3

            text-xs sm:text-sm
            font-medium
            shadow-md
          "
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* PREVIOUS */}
        <button
          onClick={onPrevious}
          className="
            absolute left-2 sm:left-6
            top-1/2 -translate-y-1/2

            rounded-full
            bg-white/90

            px-3 py-2 sm:px-5 sm:py-4

            text-lg sm:text-2xl
            shadow-md

            transition hover:scale-105
          "
        >
          ←
        </button>

        {/* NEXT */}
        <button
          onClick={onNext}
          className="
            absolute right-2 sm:right-6
            top-1/2 -translate-y-1/2

            rounded-full
            bg-white/90

            px-3 py-2 sm:px-5 sm:py-4

            text-lg sm:text-2xl
            shadow-md

            transition hover:scale-105
          "
        >
          →
        </button>

        {/* DOWNLOAD */}
        <div
          className="
            absolute bottom-4 left-1/2
            -translate-x-1/2
          "
        >
          <DownloadButton url={images[current]} />
        </div>
      </div>
    </div>
  );
}