// type FormDataType = {
//   name: string;
//   email: string;
//   password: string;
// };

const Form = () => {
  const formAction = (formData) => {
    const userData = {
      name: formData.get("name"), //gives us the value from the input having name as name.
      email: formData.get("email"), //gives us the value from the input having name as email.
      password: formData.get("password"),
    };

    console.log(userData);
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
