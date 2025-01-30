// let's just implement how to update the name,other we can implement in the same way.

import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const UpdateUserProfile = () => {
  const [name, setName] = useState("");
  const { updateName } = useContext(UserContext);

  const handleChangeName = () => {
    updateName(name);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

export default UpdateUserProfile;
