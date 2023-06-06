import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Freelancer = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Freelancer
        <span className="text-textGreen tracking-wide">Projects</span>
      </h3>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          <div>
            <p className="text-base flex gap-2 text-textGreen">
              Unimetal Web App - Project
            </p>
            I have created a Unimetal Web App. My task was to create a a
            functional website that will serve as a presentation tool their
            services and products. I designed the site to reflect that company
            identity, using their logo, colors and other branding elements. The
            site is designed to be transparent and easy to use navigate, with
            company information, their products/services, contact information
            and other relevant content. After the initial development of the
            site was completed, I agreed with the company to make regular
            updates to ensure that the page always displays the latest
            information and adapts their needs.
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelancer;
