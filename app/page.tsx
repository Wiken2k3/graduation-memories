// import Hero from "@/features/landing/Hero/Hero";
// import Story from "@/features/landing/Story";
// import MemoryWall from "@/features/landing/MemoryWall";
// import PageSeparator from "@/animations/PageSeparator";

// import PageFlip from "@/animations/PageFlip";

// export default function Home() {
//   return (
//     <main>

//       <PageFlip>

//       <Hero/>

//       </PageFlip>

//       <PageSeparator/>

//       <PageFlip>

//       <Story/>

//       </PageFlip>

//       <PageSeparator/>

//       <PageFlip>

//       <MemoryWall/>

//       </PageFlip>


//     </main>
//   );
// }

import { redirect } from "next/navigation";

import Hero from "@/features/landing/Hero/Hero";
import Story from "@/features/landing/Story";
import MemoryWall from "@/features/landing/MemoryWall";

import PageSeparator from "@/animations/PageSeparator";
import PageFlip from "@/animations/PageFlip";

export default function Home() {

  /**
   * Website sẽ mở sau:
   *
   * 09/08/2026
   * 18:00 (GMT+7)
   */

  const OPEN_DATE = new Date("2026-08-09T18:00:00+07:00");

  if (new Date() < OPEN_DATE) {
    redirect("/coming-soon");
  }

  return (
    <main>

      <PageFlip>
        <Hero />
      </PageFlip>

      <PageSeparator />

      <PageFlip>
        <Story />
      </PageFlip>

      <PageSeparator />

      <PageFlip>
        <MemoryWall />
      </PageFlip>

    </main>
  );
}