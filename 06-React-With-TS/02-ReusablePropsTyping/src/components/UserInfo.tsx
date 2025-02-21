import React from "react";
import { type Info } from "../types"; //We can also explicitly refer that we r importing type Info i.e Info is a type not component or not data or any other thing.

// Using the Info Type which is for user
type UserInfoProp = {
  user: Info;
};

// NOTE : : :
// It's not compulsory to create a separate types.ts file to make types and export we could have made Info type here and exported it by using the export keyword before the type keyword and imported in the AdminInfo.tsx where we could make the AdminInfo type by reusing and extending the Info type

// Either do like this in old way(using the functional component,FC) or just use colon to annotate the type for the user
const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <h1>UserInfo</h1>
      <h2>Id : {user.id}</h2>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
    </div>
  );
};

export default UserInfo;
