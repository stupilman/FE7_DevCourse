import type React from "react";

export default function Button({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <>
      <button className={`${style} w-19.25 h-11 rounded-lg cursor-pointer`}>
        {children}
      </button>
    </>
  );
}
