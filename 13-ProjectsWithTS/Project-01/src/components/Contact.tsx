import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      label: "Facebook",
      icon: <FaFacebook />,
      link: "https://google.com",
    },
    {
      id: 1,
      label: "Twitter",
      icon: <BsTwitterX />,
      link: "https://google.com",
    },
    {
      id: 1,
      label: "Instagram",
      icon: <FaInstagram />,
      link: "https://google.com",
    },
    {
      id: 1,
      label: "Github",
      icon: <FaGithub />,
      link: "https://google.com",
    },
    {
      id: 1,
      label: "Youtube",
      icon: <FaYoutube />,
      link: "https://google.com",
    },
  ];

  return (
    <div className="">
      <p className="font-bold text-2xl">Contact Me:</p>
      <div className="flex  justify-center gap-x-10">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            className="flex gap-x-2 items-center px-3 py-2 bg-gray-400 rounded-2xl cursor-pointer"
          >
            {contact.icon}
            <span>{contact.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Contact;
