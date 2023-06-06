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
          title="Quizzes App"
          des="This React app allows users to create, edit, delete, and take quizzes. After the user to the application, a table with a list of all quizzes created so far is displayed on the home page, along with buttons to delete and view quizzes.
       Clicking on the quiz view button opens a page where each question is displayed as a slide in a slideshow..."
          listItem={["React", "Redux", "MaterialUi"]}
          link="https://github.com/Kemal98/Quizzes-App"
        />
        <CardArhive
          title="Shopping cart"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Bootstrap", "Typescript"]}
          link="https://github.com/Kemal98/React-typescript-shopping-cart"
        />
        <CardArhive
          title="Movie App"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Semantic UI", "The movie API"]}
          link="https://github.com/Kemal98/Movie-App"
        />
        <CardArhive
          title="Coin App"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Bootstrap", "Apexcharts"]}
          link="https://github.com/Kemal98/Coin-App"
        />
        <CardArhive
          title="Todo List"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "Framer-motion", "Redux-toolkit"]}
          link="https://github.com/Kemal98/Todo-List-React-Redux"
        />
        <CardArhive
          title="CRM clone"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
          listItem={["React", "useContext"]}
          link="https://github.com/Kemal98/CRM-clone"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardArhive
                title="Ecommerce App"
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
                listItem={["React", "Node.Js", "Express", "Socket.Io"]}
                link="https://github.com/Kemal98/Ecommerce-Website"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <CardArhive
                title="Social Network App"
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
                listItem={["HTML", "CSS", "JavaScript(OOP)"]}
                link="https://github.com/Kemal98/Social-Network"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <CardArhive
                title="Weather App"
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe porro consequuntur a debitis cupiditate repellat quia
          officiis, exercitationem, voluptatem laudantium eum dolorum. Sint
          perspiciatis fuga corporis voluptates voluptate."
                listItem={["HTML", "CSS", "JavaScript", "Weather Api"]}
                link="https://github.com/Kemal98/Weather-App"
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
