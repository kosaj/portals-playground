import useAppStore from "./+store/app.store";
import Container from "./components/container";

export function App() {
  const [containers, addContainer] = useAppStore((state) => [
    state.containers,
    state.addContainer,
  ]);

  return (
    <>
      <div>Total: {containers.length}</div>
      <div className="flex">
        <button onClick={() => addContainer()}>Add container</button>
      </div>

      {containers.length > 0 && (
        <div className="flex flex-col gap-1 p-8">
          {containers.map((container) => (
            <Container key={container.id} id={container.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
