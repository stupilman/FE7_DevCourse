export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h2>Header</h2>
      </header>
      {children}
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}
