import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}
