"use client";

import { useRouter } from "next/navigation";

export default function BackHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/#memory-wall")}
      className="inline-flex items-center rounded-full border border-[#E9E2D4] bg-white/90 px-5 py-3 text-sm font-medium text-[#272727] transition duration-200 hover:border-[#7298C7] hover:text-[#7298C7]"
    >
      ← Memory Wall
    </button>
  );
}