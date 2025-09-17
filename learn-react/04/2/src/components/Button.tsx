import type React from "react";

export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
