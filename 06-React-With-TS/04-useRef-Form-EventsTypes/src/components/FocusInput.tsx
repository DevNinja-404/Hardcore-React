import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" placeholder="Enter Your Name :" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Click to Focus
      </button>
    </div>
  );
};

export default FocusInput;
