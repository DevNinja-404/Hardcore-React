import { useState, useTransition } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

// function App() {
//   const [activeTab, setActiveTab] = useState("home");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "home":
//         return <Home />;
//       case "contact":
//         return <Contact />;
//       case "posts":
//         return <Posts />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <button onClick={() => setActiveTab("home")}>Home</button>
//           <button onClick={() => setActiveTab("contact")}>Contact</button>
//           <button onClick={() => setActiveTab("posts")}>Posts</button>
//         </div>

//         <div>{renderContent()}</div>
//       </div>
//     </>
//   );
// }

// Refactoring our code to use useTransition() hook.

const App = () => {
  const [activeTab, setActiveTab] = useState<"home" | "posts" | "contact">(
    "home"
  );

  // It should be working but its not i mean its not taking rendering posts as low priority even when i click on contacts or home.Will come back to it.
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: "home" | "posts" | "contact") => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "posts":
        return <Posts />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange("home")}>Home</button>
        <button onClick={() => handleTabChange("posts")}>Posts</button>
        <button onClick={() => handleTabChange("contact")}>Contact</button>
      </div>

      {isPending && <p>Loading...</p>}
      <div>{renderContent()}</div>
      {/* <div>
        {activeTab === "home" && <Home />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "posts" && <Posts />}
      </div> */}
    </div>
  );
};

export default App;
