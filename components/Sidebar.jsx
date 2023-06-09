import React from 'react'
import {BsGithub} from "react-icons/bs"
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Kemal98" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
          >
            <BsGithub />
          </span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100008043303175"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
          >
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/kemal_merdan_/" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
          >
            <SlSocialInstagram />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/kemal-merdan-752584268/"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark "></div>
    </div>
  );
}

export default Sidebar