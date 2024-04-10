function Window() {
  const containerId = self.crypto.randomUUID();

  return (
    <>
      <div>{containerId}</div>
    </>
  );
}

export default Window;
