import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import profliePhoto from "../public/assets/profile.jpg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-contentContainer mx-auto py-20 mdl:px-24 xl:px-4 px-2 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I also spent three months on an internship in an Austrian company
            and worked as a freelancer on two projects. One of these projects
            was a control panel, and the other was a redesign of the
            application. I also worked as a freelancer creating a website for
            Unimetal. Through these experiences, I learned how to adapt to
            different client requirements and efficiently solve software
            development problems. I have experience working with REST API and
            GraphQL, and I know how to implement and use both approaches. I hope
            to have the opportunity to use this knowledge to help my clients in
            future projects. I want to add that I have experience working with
            Node.js, Express and Mongoose.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Material Ui
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Bootstrap
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative flex pl-6 lgl:pl-0">
              <Image
                src={profliePhoto}
                // width={320}
                alt="profile-photo"
                // height={90}
                className="rounded-lg object-cover group-hover:z-20 "
              />
              <div className="hidden lgl:inline-block z-10 absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              <div className="hidden lgl:inline-flex w-full z-10 h-80 absolute border-2 border-textGreen rounded-md group-hover:-translate-x-5 group-hover:-translate-y-4  transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
