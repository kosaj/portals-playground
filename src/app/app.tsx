import useAppStore from "./+store/app.store";
import SocketContainer from "./components/SocketContainer";
import WindowContainer from "./components/windowContainer";

export function App() {
  const [containers, windows, add] = useAppStore((state) => [
    state.containers,
    state.windows,
    state.add,
  ]);

  return (
    <>
      <div className="flex justify-end gap-5">
        <button onClick={() => add("containers")}>Add container</button>
        <button onClick={() => add("windows")}>Add window</button>
      </div>

      <div>Containers: {containers.length}</div>
      {containers.length > 0 && (
        <div className="flex flex-col gap-1 p-8">
          {containers.map((container) => (
            <SocketContainer key={container.id} id={container.id} />
          ))}
        </div>
      )}

      <div>Windows: {windows.length}</div>
      {windows.length > 0 && (
        <div className="flex flex-col gap-1 p-8">
          {windows.map((window) => (
            <WindowContainer
              key={window.id}
              id={window.id}
              portalNode={window.portalNode}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
