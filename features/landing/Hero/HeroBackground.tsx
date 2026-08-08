export default function HeroBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div
          className="
            absolute
            -left-24
            -top-24
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#7298C7]/12
            blur-[100px]
          "
        />

        {/* Warm Glow */}
        <div
          className="
            absolute
            -right-24
            -bottom-24
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#F3D98F]/16
            blur-[110px]
          "
        />

        {/* Soft Center Blend */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/25
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.03)_100%)]
        "
      />

      {/* Editorial Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          [background-size:56px_56px]
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
      <div className="hero-noise absolute inset-0 opacity-[0.02]" />
    </>
  );
}