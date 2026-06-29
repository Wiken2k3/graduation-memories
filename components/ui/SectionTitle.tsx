interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      {eyebrow && (
        <p
          className="
          mb-3
          uppercase
          tracking-[0.35em]
          text-sm
          font-semibold
          text-[#7298C7]
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
        text-5xl
        font-semibold
        tracking-tight
        md:text-6xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-neutral-500
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}