import { createContext, useContext, useState } from "react";

// If the component tries to access the context before the provider is setUp then the default context is provided to the component
const UserContext = createContext({
  user: {},
  updateName: () => {},
  updateAge: () => {},
  updateValidatedStatus: () => {},
  updateEmail: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Bikash",
    age: 20,
    isValidated: false,
    email: "bablu123@gmail.com",
  });

  const updateName = (name) => setUser({ ...user, name });
  const updateAge = (age) => setUser({ ...user, age });
  const updateValidatedStatus = (isValidated) =>
    setUser({ ...user, isValidated });
  const updateEmail = (email) => setUser({ ...user, email });

  return (
    <UserContext.Provider
      value={{
        user,
        updateName,
        updateAge,
        updateValidatedStatus,
        updateEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
