import useAppStore from "../+store/app.store";

type ContainerProps = {
  id: string;
};

function Container({ id }: ContainerProps) {
  const [removeContainer] = useAppStore((state) => [state.removeContainer]);

  return (
    <>
      <div className="flex justify-between ">
        <button onClick={() => removeContainer(id)}>Remove</button>
        {id}
      </div>
    </>
  );
}

export default Container;
