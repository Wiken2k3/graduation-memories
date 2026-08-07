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
    <section className="pb-24 sm:pb-28">
      <Container className="max-w-6xl">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl font-semibold leading-tight text-[#272727] sm:text-4xl">
            Những khoảnh khắc của chúng ta
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {friend.gallery.map((image, index) => (
            <GalleryCard
              key={`${image}-${index}`}
              image={image}
              index={index}
              onOpen={lightbox.open}
            />
          ))}
        </div>
      </Container>

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