export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0">

        <div className="absolute -top-56 right-[-180px] h-[650px] w-[650px] rounded-full bg-[#7298C7]/15 blur-[120px]" />

        <div className="absolute bottom-[-240px] left-[-200px] h-[520px] w-[520px] rounded-full bg-[#F3D98F]/25 blur-[120px]" />

        <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-[#7298C7]/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F3D98F]/20 blur-[100px]" />

      </div>

      <div
        className="
        absolute
        inset-0

        opacity-[0.03]

        [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]

        [background-size:48px_48px]
        "
      />

      {/* Noise layer (nếu đã có noise.png) */}
      <div className="hero-noise" />
    </>
  );
}