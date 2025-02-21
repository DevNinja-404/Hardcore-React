import React from "react";
import { AdminInfoList } from "../types";

// Using the extended info type i.e AdminInfoList for the admin
type AdminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h1>AdminInfo</h1>
      <h2>Id : {admin.id}</h2>
      <h2>Name : {admin.name}</h2>
      <h2>Email : {admin.email}</h2>
      <h2>Role : {admin.role}</h2>
      <h2>LastLogin : {admin.lastLogin.toLocaleDateString()}</h2>
    </div>
  );
};

export default AdminInfo;
