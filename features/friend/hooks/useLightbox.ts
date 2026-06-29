"use client";

import { useState } from "react";

export function useLightbox(length: number) {
  const [current, setCurrent] = useState<number | null>(null);

  const open = (index: number) => setCurrent(index);

  const close = () => setCurrent(null);

  const hasPrevious = current !== null && current > 0;
  const hasNext = current !== null && current < length - 1;

  const next = () => {
    setCurrent((prev) => {
      if (prev === null) return null;

      return prev === length - 1 ? prev : prev + 1;
    });
  };

  const previous = () => {
    setCurrent((prev) => {
      if (prev === null) return null;

      return prev === 0 ? prev : prev - 1;
    });
  };

  return {
    current,
    open,
    close,
    next,
    previous,
    hasNext,
    hasPrevious,
  };
}