import { useState } from "react";
import Background from "../assets/Background.jpg";
import ProfilePic from "../assets/ProfilePic.jpg";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState<null | string>(null);
  const [profileUrl, setProfileUrl] = useState<null | string>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileImgChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className=" flex flex-1 flex-col pl-6 relative  min-h-[100vh] bg-gray-500 pr-3 pt-2 ">
      <div className="max-h-[30vh] rounded-xl overflow-hidden ">
        <img
          src={bannerUrl ? bannerUrl : Background}
          alt="background.png"
          className="object-cover h-[100%] w-[100%] "
        />
      </div>
      <label
        htmlFor="banner-upload"
        className="px-3 py-2 mt-3 absolute right-5 bg-white rounded-full cursor-pointer hover:bg-white/80 "
      >
        <FaCamera color="black" size={30} />
      </label>
      <input
        type="file"
        id="banner-upload"
        accept="image/*"
        className="hidden"
        onChange={handleBannerChange}
      />
      <div className=" relative pt-6 ">
        <div
          className="rounded-full w-44 h-44 overflow-hidden absolute -top-10 left-[2vw]"
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <img
            src={profileUrl ? profileUrl : ProfilePic}
            alt="profilepic.jpg"
            className={`object-cover w-[100%] h-[100%] ${
              isMouseOver ? "" : ""
            }`}
          />
          {isMouseOver && (
            <div className="">
              <label
                htmlFor="profileImg-upload"
                className="h-44 w-44 absolute top-0 rounded-full flex items-center justify-center  bg-black/60"
              >
                <FaCamera size={50} color="white " className=" " />
              </label>
              <input
                type="file"
                id="profileImg-upload"
                accept="image/*"
                className="hidden  "
                onChange={handleProfileImgChange}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-2 ml-56 font-[cursive] text-xl">
          <span>Bikash Shah</span>
          <span>1M views</span>
          <span>
            This is the youtube channel which i built with the passion of
            teaching people about technology and computer science.
          </span>
          <button className="bg-red-700 w-fit rounded-xl px-4 py-2 mt-2 text-white hover:bg-red-800 ">
            Subscribe
          </button>
        </div>
      </div>

      <div className="pl-[3rem] pt-10 pr-10">
        <Tabs />
      </div>
    </div>
  );
};

export default Profile;
