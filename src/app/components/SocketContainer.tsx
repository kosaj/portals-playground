import { OutPortal } from "react-reverse-portal";
import useAppStore from "../+store/app.store";

type SocketContainerProps = {
  id: string;
};

function SocketContainer({ id }: SocketContainerProps) {
  const [remove, windows, assignAvailableWindow] = useAppStore((state) => [
    state.remove,
    state.windows,
    state.assignAvailableWindow,
  ]);
  const children = windows.filter((window) => window.parentId === id);

  return (
    <>
      <div className="flex justify-between ">
        <button onClick={() => remove("containers", id)}>Remove</button>
        <button onClick={() => assignAvailableWindow(id)}>Add Window</button>
        {id}
      </div>
      {children.length > 0 && (
        <div className="pl-2">
          Children:
          {children.map((child) => (
            <OutPortal key={child.id} node={child.portalNode} />
          ))}
        </div>
      )}
    </>
  );
}

export default SocketContainer;
