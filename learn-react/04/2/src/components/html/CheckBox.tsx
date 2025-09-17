import type React from "react";

export default function CheckBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <input type="checkbox" id="checkbox" className="w-5 h-5 bg-gray-400 " />
      <label htmlFor="checkbox">{children}</label>
    </div>
  );
}
