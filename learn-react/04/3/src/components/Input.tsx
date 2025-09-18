type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "number" | "date";
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter w-60 h-11 text-sm px-4 rounded-lg placeholder:text-[#acacac] bg-white border border-[#4f4f4f]"
        {...rest}
      />
    </>
  );
}
