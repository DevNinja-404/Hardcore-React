import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
      <p>IsValidatedUser : {user.isValidated ? "true" : "false"}</p>
    </div>
  );
};

export default UserProfile;
