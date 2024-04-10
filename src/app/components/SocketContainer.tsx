import useAppStore from "../+store/app.store";

type SocketContainerProps = {
  id: string;
};

function SocketContainer({ id }: SocketContainerProps) {
  const [remove] = useAppStore((state) => [state.remove]);

  return (
    <>
      <div className="flex justify-between ">
        <button onClick={() => remove("containers", id)}>Remove</button>
        {id}
      </div>
    </>
  );
}

export default SocketContainer;
