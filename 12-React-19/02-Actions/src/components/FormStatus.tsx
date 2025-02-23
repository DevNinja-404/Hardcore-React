// useFormStatus() is a hook that gives you status information of the last form submission.

// Syntax:
// const { pending, data, method, action } = useFormState();

import FormButton from "./FormButton";

const FormStatus = () => {
  const formAction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(newUser);
  };

  return (
    <form action={formAction}>
      <div>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input type="password" id="password" name="password" />
        </div>
        {/* To use this useFormStatus() hook we need to create a separate component */}
        <FormButton />
      </div>
    </form>
  );
};

export default FormStatus;
