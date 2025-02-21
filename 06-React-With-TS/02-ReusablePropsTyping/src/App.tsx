import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

import { Info, AdminInfoList } from "./types";

function App() {
  const user: Info = {
    id: 1,
    name: "Bikash Shah",
    email: "sahb6969@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Bablu Shah",
    email: "Bablu6969@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </>
  );
}

export default App;
