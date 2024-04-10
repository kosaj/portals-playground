import { useEffect } from "react";
import { HtmlPortalNode, InPortal } from "react-reverse-portal";
import useAppStore from "../+store/app.store";

type WindowContainerProps = {
  id: string;
  portalNode: HtmlPortalNode<React.Component<unknown>>;
};

function WindowContainer({ id, portalNode }: WindowContainerProps) {
  const [remove, freeWindow, window] = useAppStore((state) => [
    state.remove,
    state.freeWindow,
    state.windows,
  ]);

  const parentId = window.find((w) => w.id === id)?.parentId;

  useEffect(() => {
    console.log("WindowContainer mounted", id);

    return () => {
      console.log("WindowContainer unmounted", id);
    };
  }, []);

  useEffect(() => {
    console.log("WindowContainer updated - [", id, "] - [", parentId, "]");
  }, [id, parentId]);

  return (
    <>
      <InPortal node={portalNode}>
        <div className="flex justify-between">
          <button onClick={() => remove("windows", id)}>Remove</button>
          <button onClick={() => freeWindow(id)}>Free</button>
          {id}
        </div>
        <iframe
          src="https://kosaj.github.io/mbp-queue/"
          height={"100px"}
          width={"100%"}
        />
      </InPortal>
    </>
  );
}

export default WindowContainer;
