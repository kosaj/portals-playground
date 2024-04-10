import { useEffect } from "react";
import { HtmlPortalNode, InPortal } from "react-reverse-portal";
import useAppStore from "../+store/app.store";

type WindowContainerProps = {
  id: string;
  portalNode: HtmlPortalNode<React.Component<unknown>>;
};

function WindowContainer({ id, portalNode }: WindowContainerProps) {
  const [remove, freeWindow] = useAppStore((state) => [
    state.remove,
    state.freeWindow,
  ]);

  useEffect(() => {
    console.log("WindowContainer mounted", id);
  }, []);

  return (
    <>
      <InPortal node={portalNode}>
        <div className="flex justify-between">
          <button onClick={() => remove("windows", id)}>Remove</button>
          <button onClick={() => freeWindow(id)}>Free</button>
          {id}
        </div>
      </InPortal>
    </>
  );
}

export default WindowContainer;
