export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>Docs Header</h1>
        {children}
        <h1>Docs Footer</h1>
      </header>
    </>
  );
}
