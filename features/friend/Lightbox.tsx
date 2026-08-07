"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (current === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [current]);

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

  if (!mounted || current === null) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm px-4 py-6 sm:px-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-2xl transition-all duration-300 ease-out">
          <Image
            src={images[current]}
            alt={`Ảnh kỷ niệm ${current + 1}`}
            fill
            sizes="100vw"
            className="object-contain bg-black/10"
          />
        </div>

        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-[#272727] shadow-sm transition hover:scale-105"
        >
          ✕
        </button>

        <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium shadow-sm sm:text-sm">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        <button
          onClick={onPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-lg font-medium shadow-sm transition hover:scale-105"
        >
          ←
        </button>

        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-lg font-medium shadow-sm transition hover:scale-105"
        >
          →
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <DownloadButton url={images[current]} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
