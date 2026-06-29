interface Props {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
      rounded-full
      bg-[#7298C7]/10
      px-4
      py-2
      text-sm
      font-medium
      text-[#7298C7]
      "
    >
      {children}
    </span>
  );
}