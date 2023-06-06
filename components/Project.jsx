import Image from "next/image";
import dashboard from "../public/assets/images/screenshot (6).png";
import ai from "../public/assets/images/ai.png";
import movie from "../public/assets/movie.jpg";
import memories from "../public/assets/memories.png";

import SectionTitle from "./SectionTitle";
import {TbBrandGithub} from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx";

// screenshot (6)

const Project = () => {
  return (
    <div className="max-w-container mx-auto mdl:px-24 xl:px-4 px-2 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col  items-center justify-center gap-28 mt-10 ">
          <div className="flex flex-col lg:flex-row gap-6">
            <a
              href="https://github.com/Kemal98/PromptGenius-App"
              className="w-full lg:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={ai}
                  alt="Dashboard"
                  className="w-full h-full object-contain"
                />{" "}
              </div>
            </a>
            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold ">Prompt Genius App </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 lg:-ml-16 rounded-md">
                "PromptGenius" is an innovative application that uses the power
                of artificial intelligence (AI) to generate creative prompts.
                With "PromptGenius" you can discover diverse and original
                prompts to help you develop new ideas, find new ways of thinking
                and expressing yourself, and share your creative output with
                others.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-2 justify-between text-textDark ">
                <li>Next.Js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Kemal98/PromptGenius-App"
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://prompt-genius-9t0hrhp5v-kemal98.vercel.app/"
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-6">
            <a
              href="https://github.com/Kemal98/Full-Stack-MERN-Application---Memories"
              className="w-full lg:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={memories}
                  alt="Movie App"
                  className="w-full h-full object-contain"
                />{" "}
              </div>
            </a>
            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold ">Full Stack Memories App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
                I developed a full stack application using React, Node.js,
                Express, and MongoDB. The app allows users to enter and view
                their travel events, including images, text, location, date,
                description, and duration. Data is stored in a database for easy
                management. The focus was on functionality, with Redux managing
                the app's state.Although appearance was not the primary goal,
                the app has a clean and modern design.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-2 justify-between text-textDark ">
                <li>React</li>
                <li>MongoDB</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Node.Js</li>
                <li>Materail Ui</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Kemal98/Full-Stack-MERN-Application---Memories"
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </a>
                {/* <a href="" className="hover:text-textGreen duration-300">
                  <RxOpenInNewWindow />
                </a> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <a
              href="https://dashboard-app-fqsc.vercel.app/"
              className="w-full lg:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={dashboard}
                  alt="Dashboard"
                  className="w-full h-full object-contain"
                />{" "}
              </div>
            </a>
            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold ">Dashboard App </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 lg:-ml-16 rounded-md">
                As an internship for a company and Austria, During my
                internship, I developed a high-performance web application that
                served as a dashboard. My main responsibility was to translate
                the Figma design into a functional website. I focused on writing
                or copying code to accurately represent the design and
                optimizing the application's performance for fast page loading
                and a seamless user experience.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-2 justify-between text-textDark ">
                <li>React</li>
                <li>Material Ui</li>
                {/* <li>use Context</li> */}
              </ul>
              <div className="text-2xl flex gap-4">
                {/* <a href="" className="hover:text-textGreen duration-300">
                  <TbBrandGithub />
                </a> */}
                <a
                  href="https://dashboard-app-fqsc.vercel.app/"
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
