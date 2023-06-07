"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import BlueDuck from "./works/BlueDick";
import Freelancer from "./works/Unimetal";

const Experience = () => {

  let [work, setWork] = useState("blue");

  return (
    <div
      id="experience"
      className="max-w-containerxs mx-auto py-4 lgl:py-10 mdl:px-24 xl:px-4 px-2"
    >
      <SectionTitle title="Where I have worked" />
      <div className="w-full mdl:h-[30vh] mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-36 flex flex-col">
          <li
            onClick={() => setWork("blue")}
            className={`border-l-2
             ${work === "blue" ? "border-l-textGreen" : "border-l-hoverColor"}
            bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            Blue Duck
          </li>
          <li
            onClick={() => setWork("freelancer")}
            className={`border-l-2
             ${
               work === "freelancer"
                 ? "border-l-textGreen"
                 : "border-l-hoverColor"
             }
            bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
          >
            Freelancer
          </li>
        </ul>
        {work === "blue" && <BlueDuck />}
        {work === "freelancer" && <Freelancer />}
      </div>
    </div>
  );
};

export default Experience;
