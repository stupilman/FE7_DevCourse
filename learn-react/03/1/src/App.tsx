// CSS Modules -> classNames

import { twMerge } from "tailwind-merge";

// Tailwind CSS -> tailwind-merge

export default function App() {
  const isBlue = false;
  return (
    <div className="center">
      <button className="btn-primary">버튼</button>
      <button className={twMerge(`bg-amber-500`, isBlue && `bg-blue-500`)}>
        버튼
      </button>
    </div>
  );
}
