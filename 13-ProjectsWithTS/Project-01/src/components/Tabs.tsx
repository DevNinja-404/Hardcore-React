import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { RiProjectorFill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";
import Contact from "./Contact";
import About from "./About";
import Card from "./Card";

const tabs = [
  {
    id: "home",
    icon: <FaHome size={20} />,
    label: "Home",
    content: (
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] space-x-10 space-y-10 ">
        <Card
          thumbnail=""
          title="Tropical Plants Care"
          description="A blog to provide u with methods to properly take care of the tropical plants"
          link="https://google.com"
        />
        <Card
          thumbnail=""
          title="Tropical Plants Care"
          description="A blog to provide u with methods to properly take care of the tropical plants"
          link="https://google.com"
        />
        <Card
          thumbnail=""
          title="Tropical Plants Care"
          description="A blog to provide u with methods to properly take care of the tropical plants"
          link="https://google.com"
        />
        <Card
          thumbnail=""
          title="Tropical Plants Care"
          description="A blog to provide u with methods to properly take care of the tropical plants"
          link="https://google.com"
        />
        <Card
          thumbnail=""
          title="Tropical Plants Care"
          description="A blog to provide u with methods to properly take care of the tropical plants"
          link="https://google.com"
        />
      </div>
    ),
  },
  {
    id: "projects",
    icon: <RiProjectorFill size={20} />,
    label: "Projects",
    content: <>Project</>,
  },
  {
    id: "courses",
    icon: <GiSecretBook size={20} />,
    label: "Courses",
    content: <>Courses</>,
  },
  {
    id: "about",
    icon: <FaCircleInfo size={20} />,
    label: "About",
    content: <About />,
  },
  {
    id: "contact",
    icon: <IoMdContacts size={20} />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="">
      <div className="flex justify-between text-black">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1  justify-center pb-1 cursor-pointer ${
              activeTab === tab.id ? "border-b-2 border-b-black " : ""
            }`}
          >
            <div className="flex items-center justify-center gap-x-1">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="py-10 px-4">
        {tabs.filter((eachTab) => eachTab.id === activeTab)[0].content}
      </div>
    </div>
  );
};

export default Tabs;
