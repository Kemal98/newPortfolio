import { useState } from "react";
import CardArhive from "./CardArhive";
import {motion} from "framer-motion"

const Arhive = () => {
 const [showMore, setShowMore] = useState(false)
  return (
    <div
      id="project"
      className="max-w-contentContainer mx-auto  py-24 mdl:px-24 xl:px-4 px-2"
    >
      {/* <SectionTitle title="My projects" /> */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <CardArhive
          title="Educer Engligh Learing Academy"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Tailwind CSS", "sd"]}
          link="www.google.com"
        />
        <CardArhive
          title="Educer Engligh Learing Academy"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Tailwind CSS", "sd"]}
          link="www.google.com"
        />
        <CardArhive
          title="Educer Engligh Learing Academy"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Tailwind CSS", "sd"]}
          link="www.google.com"
        />
        <CardArhive
          title="Educer Engligh Learing Academy"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Tailwind CSS", "sd"]}
          link="www.google.com"
        />
        <CardArhive
          title="Educer Engligh Learing Academy"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Tailwind CSS", "sd"]}
          link="www.google.com"
        />
        <CardArhive
          title="Educer Engligh Learing Academy"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Tailwind CSS", "sd"]}
          link="www.google.com"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardArhive
                title="Educer Engligh Learing Academy"
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
                listItem={["React", "Tailwind CSS", "sd"]}
                link="www.google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <CardArhive
                title="Educer Engligh Learing Academy"
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
                listItem={["React", "Tailwind CSS", "sd"]}
                link="www.google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <CardArhive
                title="Educer Engligh Learing Academy"
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
                listItem={["React", "Tailwind CSS", "sd"]}
                link="www.google.com"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGren hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGren hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Arhive;
