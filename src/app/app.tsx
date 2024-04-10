import { useEffect } from "react";
import useAppStore from "./+store/app.store";

export function App() {
  const [
    something,
    values,
    updateValues,
    updateSomething,
    updateSomethingWithReplace,
  ] = useAppStore((state) => [
    state.something,
    state.values,
    state.updateValues,
    state.updateSomething,
    state.updateSomethingWithReplace,
  ]);

  useEffect(() => {
    console.log(something);
    updateValues([0, 1, 2, 3, 4, 5]);
  }, []);

  return <div>Hello World!</div>;
}

export default App;
