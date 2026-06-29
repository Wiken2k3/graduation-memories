interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tìm tên của cậu..."
        className="
          w-full
          rounded-[999px]
          border
          border-[#E8E1D3]
          bg-white/90
          px-8
          py-5
          text-lg
          shadow-[0_15px_50px_rgba(0,0,0,.07)]
          backdrop-blur
          transition-all
          duration-300
          outline-none
          placeholder:text-neutral-400
          focus:border-[#7298C7]
          focus:ring-4
          focus:ring-[#7298C7]/20
          hover:shadow-[0_20px_60px_rgba(0,0,0,.10)]
        "
      />
    </div>
  );
}