import "./App.css";
import UpdateUserProfile from "./components/UpdateUserProfile";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUserProfile />
      </UserProvider>
    </>
  );
}

export default App;
