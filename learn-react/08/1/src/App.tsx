import Page from "./components/Page.tsx";
import CountOutsideDisplay from "./components/CountOutsideDisplay.tsx";
import CounterProvider from "./context/counter/CounterProvider.tsx";


export default function App() {
  return (
    <CounterProvider>
      <Page />
      <CountOutsideDisplay />
    </CounterProvider>
  );
}
