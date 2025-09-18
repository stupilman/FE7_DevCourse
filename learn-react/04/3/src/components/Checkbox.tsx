type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;

export default function Checkbox(props: CheckboxProps) {
  const { children, ...rest } = props;
  return (
    <div className="flex items-center gap-2">
      <input
        id="chk"
        type="checkbox"
        {...rest}
        className="appearance-none w-5 h-5 rounded-[5px] border border-[#4f4f4f] bg-[#4F4F4F] checked:bg-[url('/check.svg')] checked:bg-no-repeat checked:bg-center"
      />
      <label htmlFor="chk">{children}</label>
    </div>
  );
}
