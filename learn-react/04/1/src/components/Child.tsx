import type React from "react";

export default function Child({
  header,
  content,
  footer,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  );
}
