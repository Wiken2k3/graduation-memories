import Container from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section
      className="
      relative

      flex
      items-center

      overflow-hidden

      pt-32
      pb-24

      lg:min-h-screen
      "
    >
      <HeroBackground />

      <Container>
        <div
          className="
          relative
          z-10

          grid

          items-center

          gap-20

          py-20

          lg:grid-cols-2
          lg:py-32
          "
        >
          <HeroContent />

          <HeroImages />
        </div>

      </Container>
    </section>
  );
}