import { FormEvent, useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // Since we will be using our useRef inside our form ,inside our inupt element specifically
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // So the event is a form event which comes from the HTMLFormElement:
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue: string = name.current!.value; //The value of name.current is null before the page renders but after that its assigned to input for name right so we know that it won't be null when we submit right and hence we say our compiler that u don't have to worry about that null.
    const emailValue: string = email.current!.value;
    const passwordValue: string = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <div>
      {/* If we provide a callBack function inside th onSubmit we don't have to annotate the function in that case but if we wanna write a separate function and pass its refernce to the onSubmit we need to specify some type for that */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your Name:" ref={name} />
        <input type="email" placeholder="Enter your Email:" ref={email} />
        <input
          type="password"
          placeholder="Enter your Password:"
          ref={password}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>User Info : </h1>
        <p>Name : {submittedData.name}</p>
        <p>Email : {submittedData.email}</p>
        <p>Password : {submittedData.password}</p>
      </div>
    </div>
  );
};

export default Form;
