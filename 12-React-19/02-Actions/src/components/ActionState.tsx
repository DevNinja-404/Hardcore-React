// useActionState() is a hook that allows us to update state based on the result of a form action.

// Syntax :
// const [state,formAction]=useActionState(finally,initialState)

import { useActionState } from "react";

async function increment(previousState, formData) {
  console.log(formData.get("name"));
  return previousState + 1;
}

const ActionState = () => {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
      <h1>{state}</h1>
      <button formAction={formAction}>Increment</button>
      <input type="text" placeholder="Enter your name" name="name" />
    </form>
  );
};

export default ActionState;
