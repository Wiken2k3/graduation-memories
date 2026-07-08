import Hero from "@/features/landing/Hero/Hero";
import Story from "@/features/landing/Story";
import MemoryWall from "@/features/landing/MemoryWall";
import PageSeparator from "@/animations/PageSeparator";

import PageFlip from "@/animations/PageFlip";

export default function Home() {
  return (
    <main>

      <PageFlip>

      <Hero/>

      </PageFlip>

      <PageSeparator/>

      <PageFlip>

      <Story/>

      </PageFlip>

      <PageSeparator/>

      <PageFlip>

      <MemoryWall/>

      </PageFlip>


    </main>
  );
}