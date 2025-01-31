import { useId } from "react";

const UniqueId = () => {
  // The useId hook doesn't take any argument
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}-password}`} />
    </div>
  );
};

export default UniqueId;
