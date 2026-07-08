import Container from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPortrait from "./HeroPortrait";
import ScrollIndicator from "./ScrollIndicator";


export default function Hero() {
  return (
    <section
      className="
        relative

        isolate

        flex

        min-h-[100svh]

        lg:min-h-screen

        items-center

        overflow-hidden

        bg-[#F5F1E6]
      "
    >

      {/* Background layers */}
      <HeroBackground />


      {/* Main content */}
      <Container
        className="
          relative

          z-10

          py-10

          sm:py-14

          lg:py-28
        "
      >

        <div
          className="
            grid

            items-center

            gap-14

            lg:grid-cols-2

            lg:gap-24
          "
        >

          <HeroContent />

          <HeroPortrait />

        </div>

      </Container>


      {/* Scroll indicator */}
      <div
        className="
          absolute

          bottom-10

          left-1/2

          z-20

          -translate-x-1/2
        "
      >
        <ScrollIndicator />
      </div>


      {/* Soft transition to StoryBook */}
      <div
        className="
          pointer-events-none

          absolute

          bottom-0

          left-0

          right-0

          z-10

          h-48

          bg-gradient-to-b

          from-transparent

          via-[#FFFDF8]/60

          to-[#FFFDF8]
        "
      />

    </section>
  );
}