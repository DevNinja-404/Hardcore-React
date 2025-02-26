import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { useRef, useState } from "react";

const SideBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const sideBarRef = useRef(null);

  return (
    <div>
      <aside
        className={`fixed  md:max-w-[5rem] bg-black rounded-r-3xl min-h-[100vh] px-2  transition-all duration-1000 ease-in-out z-10  ${
          isMenuClicked ? " top-0 left-0 " : "-left-14"
        } `}
        ref={sideBarRef}
      >
        <ul className=" flex flex-col h-[100vh] justify-between rounded-r-3xl">
          <div className="flex flex-col py-10 gap-y-4">
            <li className="">
              <button className="px-3 py-2 hover:bg-white/30 rounded-md">
                <FaHome color="white" size={30} />
              </button>
            </li>

            <li className="">
              <button className="px-3 py-2 hover:bg-white/30 rounded-md">
                <FaSearch color="white" size={30} />
              </button>
            </li>
          </div>
          {isMenuClicked && (
            <div className="">
              <li className="">
                <button
                  className="px-3 py-2 hover:bg-white/30 rounded-md "
                  onClick={() => setIsMenuClicked(false)}
                >
                  <GoSidebarExpand color="white" size={30} />
                </button>
              </li>
            </div>
          )}
          <div className="flex flex-col py-10 gap-y-4">
            <li className="">
              <button className="px-3 py-2 hover:bg-white/30 rounded-md">
                <IoSettings color="white" size={30} />
              </button>
            </li>
            <li className="">
              <button className="px-3 py-2 hover:bg-white/30 rounded-md">
                <CgProfile color="white" size={30} />
              </button>
            </li>
          </div>
        </ul>
      </aside>
      <div
        className={`${
          isMenuClicked
            ? "fixed -left-20 top-[46.1vh] "
            : "bg-black  rounded-r-xl  fixed top-[46.1vh] -left-2.5  py-4  pr-1 z-10  "
        } transition-all duration-1000 ease-in-out`}
      >
        <li className="">
          <button
            className="px-2 py-2 rounded-md hover:bg-white/30 "
            onClick={() => setIsMenuClicked(true)}
          >
            <GoSidebarCollapse color="white" size={30} />
          </button>
        </li>
      </div>
    </div>
  );
};

export default SideBar;
