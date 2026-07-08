export default function HeroBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[760px]
            w-[760px]
            rounded-full
            bg-[#7298C7]/15
            blur-[160px]
          "
        />

        {/* Warm Glow */}
        <div
          className="
            absolute
            -right-40
            -bottom-40
            h-[760px]
            w-[760px]
            rounded-full
            bg-[#F3D98F]/20
            blur-[170px]
          "
        />

        {/* Soft Center Blend */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/30
            blur-[180px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.03)_100%)]
          "
        />
      </div>

      {/* Editorial Grid */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.025]

          [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Soft Top Gradient */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-56
          bg-gradient-to-b
          from-white/35
          to-transparent
        "
      />

      {/* Soft Bottom Gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          bg-gradient-to-t
          from-[#F5F1E6]/60
          to-transparent
        "
      />

      {/* Paper / Noise Texture */}
      <div className="hero-noise absolute inset-0 opacity-[0.045]" />
    </>
  );
}