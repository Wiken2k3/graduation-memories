"use client";

import Container from "@/components/layout/Container";
import { Friend } from "@/data/friends";

import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";
import { useLightbox } from "./hooks/useLightbox";

interface Props {
  friend: Friend;
}

export default function FriendGallery({ friend }: Props) {
  const lightbox = useLightbox(friend.gallery.length);

  return (
    <section className="pb-40">
      <Container>
        {/* TITLE */}
        <h2
          className="
            mb-16
            text-center
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
          "
        >
          Những khoảnh khắc của chúng ta
        </h2>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {friend.gallery.map((image, index) => (
            <GalleryCard
              key={image}
              image={image}
              index={index}
              onOpen={lightbox.open}
            />
          ))}
        </div>
      </Container>

      {/* LIGHTBOX */}
      <Lightbox
        images={friend.gallery}
        current={lightbox.current}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrevious={lightbox.previous}
      />
    </section>
  );
}