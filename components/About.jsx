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
            "Hello! I'm Kemal Merdan, a passionate and experienced software
            developer with a focus on creating innovative web applications.
            Throughout my career, I have independently worked on a diverse range
            of projects, including Movie App, Quizz App, E-commerce web shop,
            Coin App, CRM-clone, Weather App, and Social Media App. These
            projects have allowed me to sharpen my problem-solving skills and
            deliver high-quality solutions tailored to client requirements. In
            addition to my project work, I had the opportunity to enhance my
            skills through a three-month internship at an Austrian company,
            where I gained valuable insights into the industry's best practices.
            I also have freelancing experience, where I successfully completed
            two projects. One involved developing a comprehensive control panel,
            while the other focused on redesigning an existing application.
            These experiences have taught me the importance of adaptability and
            effective communication with clients, enabling me to deliver optimal
            results. During my freelancing journey, I had the privilege of
            collaborating with Unimetal, where I created a visually stunning
            website that showcased their brand and offerings. This experience
            honed my ability to understand and translate client requirements
            into captivating web experiences. I am well-versed in working with
            REST API and GraphQL, implementing both approaches to build robust
            and efficient systems. Furthermore, I have expertise in Node.js,
            Express, and Mongoose, enabling me to develop scalable and
            performant applications. As a dedicated developer, I am committed to
            staying up-to-date with the latest industry trends and technologies.
            I thrive on challenging projects that allow me to push my creative
            boundaries and deliver exceptional software solutions. If you are
            looking for a skilled and reliable developer for your next project,
            I would be delighted to connect with you. Feel free to reach out to
            me through email. Let's collaborate and bring your ideas to life!
            Thank you for visiting my portfolio, and I look forward to the
            opportunity of working together."{" "}
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
