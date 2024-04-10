type WindowContainerProps = {
  id: string;
};

function WindowContainer({ id }: WindowContainerProps) {
  return (
    <>
      <div>{id}</div>
    </>
  );
}

export default WindowContainer;
