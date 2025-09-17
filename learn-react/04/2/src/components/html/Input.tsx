export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="w-60 h-11 border-2 border-gray-400 rounded-lg pl-3"
      />
    </>
  );
}
