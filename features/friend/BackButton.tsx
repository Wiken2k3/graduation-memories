"use client";

import { useRouter } from "next/navigation";

export default function BackHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-[#E6DED2]
        bg-white/80
        px-6
        py-3
        text-sm
        font-medium
        tracking-wide
        text-[#272727]
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#7298C7]
        hover:text-[#7298C7]
      "
    >
      ← Quay lại
    </button>
  );
}