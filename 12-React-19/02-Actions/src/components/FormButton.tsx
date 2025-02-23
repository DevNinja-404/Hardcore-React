import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending, data, method, action } = useFormStatus();
  console.log("Pending", pending);
  console.log("Data", data);
  console.log("Method", method);
  console.log("Action", action);

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default FormButton;
