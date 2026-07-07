import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1480px]

        px-6
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-20
        2xl:px-24

        ${className}
      `}
    >
      {children}
    </div>
  );
}