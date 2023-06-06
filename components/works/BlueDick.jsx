import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const BlueDick = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Intership
        <span className="text-textGreen tracking-wide">Blue Duck</span>
      </h3>
      <p className="text-base flex gap-2 text-textDark">
        October 2022 - March 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3 sml:overflow-y-scroll sml:max-h-[30vh] scrollbar scrollbar-track-textDark/30 scrollbar-thumb-textDark">
        <li className="text-base flex gap-2 text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />  
          </span>
          I worked at Blue Duck IT Solutions for four months & Services Company
          to an Austrian company, I was in charge of developing a web
          application that represented a dashboard. The main goal of the project
          was to create an application that would faithfully reproduce the
          design on the Figma platform, while ensuring high performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          My task was to copy or write the code to build the dashboard website
          according to the Figma design. In addition, special attention was paid
          to optimizing the performance of the application, ensuring that the
          page loads quickly and that the user has a smooth user experience.
          During the development, I worked on the implementation of
          functionalities such as data display, interactive graphs, data
          filtering and sorting, dark mode and similar. I also made sure that
          the app adapts properly to different screen sizes and devices so that
          it is responsive and useful on all devices.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          In addition to developing the dashboard web application, I had the
          additional task of redesigning the existing website to improve it. I
          took over the site and implemented a new design that improved the user
          experience and visual appeal. I analyzed the existing design,
          identified flaws and applied modern design concepts. I changed the
          arrangement of elements, color palette, typography and visual effects.{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default BlueDick;
