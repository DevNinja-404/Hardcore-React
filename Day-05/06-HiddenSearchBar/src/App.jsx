import { FaSearch } from "react-icons/fa";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const containerRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === containerRef.current) {
      setIsSearchClicked(false);
    }
  };

  return (
    <div
      className={`flex justify-center items-center w-[100vw] min-h-[100vh] ${
        isSearchClicked
          ? "bg-slate-800 transition-all duration-1000"
          : "bg-white transition-all duration-1000"
      }`}
      ref={containerRef}
      onClick={handleClick}
    >
      <input
        type="text"
        className=" outline-none rounded-lg border-1 border-white h-12 w-1/4 text-white text-center  placeholder:text-white/70"
        hidden={!isSearchClicked}
        placeholder="Your Search Here"
      />
      <FaSearch
        size={30}
        onClick={() => setIsSearchClicked(true)}
        className={`${isSearchClicked ? "hidden" : ""}`}
      />
    </div>
  );
}

export default App;
