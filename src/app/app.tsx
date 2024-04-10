import { useEffect } from "react";
import useAppStore from "./+store/app.store";

export function App() {
  const [
    something,
    values,
    updateValues,
    updateValuesWithReplace,
    updateSomething,
    updateSomethingWithReplace,
    reset,
  ] = useAppStore((state) => [
    state.something,
    state.values,
    state.updateValues,
    state.updateValuesWithReplace,
    state.updateSomething,
    state.updateSomethingWithReplace,
    state.reset,
  ]);

  useEffect(() => {
    console.log(something);
    // updateValues([0, 1, 2, 3, 4, 5]);

    return () => {
      console.log("cleanup");
    };
  }, [something, updateValues]);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <>
      <div className="inline-flex flex-col">
        <button onClick={() => updateValues([0, 1, 2])}>updateValues</button>
        <button onClick={() => updateValuesWithReplace([0, 1, 2])}>
          updateValuesWithReplace
        </button>
        <button onClick={() => updateSomething("meh")}>updateSomething</button>
        <button onClick={() => updateSomethingWithReplace("czapa")}>
          updateSomethingWithReplace
        </button>
      </div>
    </>
  );
}

export default App;
