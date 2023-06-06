import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:px-24 xl:px-4 px-2 flex flex-col gap-4 lgl:gap-8 "
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-5xl font-titleFont font-semibold flex flex-col"
      >
        Kemal Merdan.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px]"
      >
        I'm a front-end developer with experience working with HTML, CSS,
        JavaScript, React, Next.Js, TypeScript, Tailwind, Material Ui and
        Bootstrap. I am passionate about creating visually appealing and
        intuitive web applications and websites that offer a superior user
        experience.
        <a href="*">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 group overflow-x-hidden">
            Learn more
            <span className="bg-textGreen absolute w-full h-[1px] left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0  tranisition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duratio-300"
      >
        Check out my Project 
      </motion.button>
    </div>
  );
};

export default Banner;
