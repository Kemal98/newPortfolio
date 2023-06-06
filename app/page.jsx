"use client";

import About from "@components/About";
import Arhive from "@components/Arhive";
import Banner from "@components/Banner";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Footer from "@components/Footer";
import Project from "@components/Project";
import RightSide from "@components/RightSide";
import LeftSide from "@components/Sidebar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-[88vh] mdl:flex items-center gap-20 justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden mdl:inline-flex w-32 h-full fixed left-0 bottom-0 "
      >
        <LeftSide />
      </motion.div>
      <div className="h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Experience />
        <Project />
        <Arhive />
        <Contact/>
        <Footer/>
        {/* <Projects/> */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden mdl:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
    </div>
  );
};

export default Home;
