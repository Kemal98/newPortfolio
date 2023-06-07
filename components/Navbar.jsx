"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import { BsGithub } from "react-icons/bs";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Navbar = () => {
  const ref = useRef();

  const [showMore, setShowMore] = useState(false);

  console.log(showMore);

  const handleScroll = (e) => {
    e.preventDefault();
    setShowMore(false);
    const href = e.currentTarget.href;
    const tragetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(tragetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    elem.classList.add("scroll-container");
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };


  const handlClick = (e) => {
    if(e.target.contain(ref.current)){
      setShowMore(false)
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor bg-opacity-70 lgl:bg-opacity-100 px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Image
            className="w-14"
            width={153}
            alt="logo"
            height={132}
            src={logo}
          /> */}
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="text-[15px] flex gap-8">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-hoverColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              href="#project"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Project
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>

          <a href="/Kemal_Merdan_CV.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 "
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* ICON SMALL */}
        <div
          onClick={() => setShowMore(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="burgerMenu_ group-hover:translate-x-2 translate-x-2.5"></span>
          <span className="burgerMenu_ group-hover:translate-x-3 translate-x-0"></span>
          <span className="burgerMenu_ group-hover:translate-x-1 translate-x-2"></span>
        </div>
        {showMore && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handlClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMore(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-9 pt-3">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-hoverColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/Kemal_Merdan_CV" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, ease: "easeIn" }}
                    className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 "
                  >
                    Resume
                  </motion.button>
                </a>
                <div>
                  <div className="inline-flex xl:hidden  items-center  justify-center w-full py-6 gap-4">
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, ease: "easeIn" }}
                      href="https://github.com/Kemal98"
                      target="_blank"
                    >
                      <span className="mediaIcon">
                        <BsGithub />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, ease: "easeIn" }}
                      href="https://github.com/Kemal98"
                      target="_blank"
                    >
                      <span className="mediaIcon">
                        <SlSocialFacebook />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8, ease: "easeIn" }}
                      href="https://github.com/Kemal98"
                      target="_blank"
                    >
                      <span className="mediaIcon">
                        <SlSocialInstagram />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8, ease: "easeIn" }}
                      href="https://github.com/Kemal98"
                      target="_blank"
                    >
                      <span className="mediaIcon">
                        <SlSocialLinkedin />
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                href="gmail:mokskemal@gmail.com"
                transition={{ delay: 1.1, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4 "
              >
                <p>mokskemal@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
