interface Props {
  children: React.ReactNode;
}

export default function Button({
  children,
}: Props) {
  return (
    <button
      className="
      rounded-full
      bg-[#272727]
      px-8
      py-4
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#7298C7]
      "
    >
      {children}
    </button>
  );
}