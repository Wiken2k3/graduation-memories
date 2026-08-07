import { notFound } from "next/navigation";
import { friends } from "@/data/friends";

import Container from "@/components/layout/Container";

import FriendMessage from "@/features/friend/FriendMessage";
import FriendGallery from "@/features/friend/FriendGallery";
import FriendPasswordGate from "@/features/friend/FriendPasswordGate";
import BackHomeButton from "@/features/friend/BackButton";
import { getAuthenticatedFriendSlug } from "@/lib/friendAuth";

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

  const authenticatedSlug = await getAuthenticatedFriendSlug();
  const isAuthorized = authenticatedSlug === slug;

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-[#F5F1E6]">
        <Container className="py-6 sm:py-8">
          <BackHomeButton />
        </Container>

        <FriendPasswordGate slug={slug} friendName={friend.name} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F1E6]">
      <Container className="py-6 sm:py-8">
        <BackHomeButton />
      </Container>

      {/* MESSAGE */}
      <FriendMessage friend={friend} />

      {/* GALLERY */}
      <FriendGallery friend={friend} />
    </main>
  );
}