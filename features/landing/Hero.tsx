import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
      "
    >
      {/* EXISTING BLOBS */}
      <div className="absolute -top-44 right-[-160px] h-[550px] w-[550px] rounded-full bg-[#7298C7]/15 blur-3xl" />
      <div className="absolute bottom-[-150px] left-[-120px] h-[380px] w-[380px] rounded-full bg-[#F3D98F]/25 blur-3xl" />

      {/* NEW DEPTH LAYERS */}
      <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-[#7298C7]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F3D98F]/20 blur-3xl" />

      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-lg font-medium uppercase tracking-[0.25em] text-[#7298C7]">
            Graduation 2026
          </p>

          <h1
            className="
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-tight
              md:text-7xl
              lg:text-8xl
            "
          >
            Chào mừng cậu.
            <br />
            Cảm ơn vì đã là
            <br />
            một phần thanh xuân của tớ.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-[#5C5C5C]">
            Tớ đã chuẩn bị một món quà nhỏ dành riêng cho cậu.
            Hãy lướt xuống để tìm phần của mình nhé.
          </p>

          {/* CTA */}
          <div className="mt-12">
            <a href="#memory-wall">
              <Button>Tìm phần của mình</Button>
            </a>
          </div>

          {/* STATS */}
          <div className="mt-20 flex flex-wrap gap-10">
            <div>
              <h3 className="text-4xl font-bold text-[#272727]">
                126+
              </h3>
              <p className="text-neutral-500">
                Người bạn
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#272727]">
                4
              </h3>
              <p className="text-neutral-500">
                Năm đại học
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#272727]">
                ∞
              </h3>
              <p className="text-neutral-500">
                Kỷ niệm
              </p>
            </div>
          </div>

          {/* Scroll hint */}
          <p className="mt-16 text-sm uppercase tracking-[0.3em] text-[#7298C7]">
            Hãy kéo xuống nhé ↓
          </p>
        </div>
      </Container>
    </section>
  );
}