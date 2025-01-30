import { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />

      {/* If we dont apply key to the input field ,then the value which we had provided in the field won't be changed even when we chnage the state sw because When a React component re-renders, React tries to efficiently update the DOM by comparing the previous and new virtual DOM. If React can't uniquely identify an element (like an <input> field without a key), it may reuse an existing DOM element instead of creating a new one.  */}
      {/* If you don’t use a key, React may reuse the existing input field instead of creating a new one, causing unintended behavior—like preserving the old value even if the state updates. */}
      {/* Applying a key makes React treat the input field as a unique element. This
      forces React to discard the previous input field and create a new one
      whenever the state changes. As a result, the field resets instead of
      preserving its previous value.WHen the component re-renders it compares the key of the prevInput field and the currentINput field of virtualDOM and if the key is ame then the same input field is used whereas a new input element is made*/}
      {/* If the key stays the same, React reuses the existing DOM element.
        If the key changes, React replaces it with a new element. */}

      <input type="text" key={sw ? "dark" : "light"} />
      <button onClick={() => setSw(!sw)}>Switch</button>
    </div>
  );
};

export default Switcher;
