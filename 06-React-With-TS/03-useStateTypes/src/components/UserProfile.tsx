import { useState } from "react";

type UserInfo = {
  name: string;
  age: number;
};

const UserProfile = () => {
  const [user, setUser] = useState<UserInfo>({
    name: "Bikash Shah",
    age: 20,
  });

  return (
    <div>
      UserProfile
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
    </div>
  );
};

export default UserProfile;
