import { notFound } from "next/navigation";
import { friends } from "@/data/friends";

import Container from "@/components/layout/Container";

import FriendHero from "@/features/friend/FriendHero";
import FriendMessage from "@/features/friend/FriendMessage";
import FriendGallery from "@/features/friend/FriendGallery";
import BackHomeButton from "@/features/friend/BackButton";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FriendPage({ params }: Props) {
  const { slug } = await params;

  const friend = friends.find((item) => item.slug === slug);

  if (!friend) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F1E6]">
      {/* TOP NAV / BACK BUTTON LAYER */}
      <Container className="py-10">
        <BackHomeButton />
      </Container>

      {/* HERO */}
      <FriendHero friend={friend} />

      {/* MESSAGE */}
      <FriendMessage friend={friend} />

      {/* GALLERY */}
      <FriendGallery friend={friend} />
    </main>
  );
}