import { useState } from "react";
import CardArhive from "./CardArhive";
import {motion} from "framer-motion"

const Arhive = () => {
 const [showMore, setShowMore] = useState(false)
  return (
    <div className="max-w-contentContainer mx-auto  py-24 mdl:px-24 xl:px-4 px-2">
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
          des="As part of the project, I developed a fully functional online shopping cart using React, TypeScript and Bootstrap. The shopping cart allows users to add products to the cart, delete products from the cart, and display the total number of products in the cart."
          listItem={["React", "Bootstrap", "Typescript"]}
          link="https://github.com/Kemal98/React-typescript-shopping-cart"
        />
        <CardArhive
          title="Movie App"
          des="This React app allows users to browse top-rated TV shows and movies, perform searches, and have a detailed view of individual items. TheMovieDB API is used to collect data. The application uses React Hooks, React Context and React Router. CSS styling is implemented using the Semantic UI framework."
          listItem={["React", "Semantic UI", "The movie API"]}
          link="https://github.com/Kemal98/Movie-App"
        />
        <CardArhive
          title="Coin App"
          des="This online cryptocurrency store is implemented in React. It uses the Coingecko API to gather cryptocurrency data and ApexCharts to display price changes. Communication with the API is done using the Axios library, and application state is managed using display state. Users can browse the list of cryptocurrencies and see the details of the selected cryptocurrency such as price, market cap, volume and price change."
          listItem={["React", "Bootstrap", "Apexcharts"]}
          link="https://github.com/Kemal98/Coin-App"
        />
        <CardArhive
          title="Todo List"
          des="This application is a classic To-Do list that allows users to organize their tasks and obligations. Users can add new items to the list, mark items as complete, edit existing items and delete them as needed."
          listItem={["React", "Framer-motion", "Redux-toolkit"]}
          link="https://github.com/Kemal98/Todo-List-React-Redux"
        />
        <CardArhive
          title="CRM clone"
          des="CRM-clone application is a classic copy of CRM (Customer Relationship Management) software that helps users organize, monitor and manage their business relationships with clients. This application allows users to enter and manage customer information, including basic information such as name, address, contact information, etc."
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
                des="This application is my first self-created project in React. Using technologies like React, Node.js, Express and Socket.io, I enabled users to register, login, search and manage products, as well as leave reviews and send messages to the company. Through this project, I gained valuable experience in web application development and was exposed to Node.js, Express and Socket.io for the first time, which was a challenging and educational experience."
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
                des="This social media application allows users to log in, register and log out of their accounts. If the user has not logged out, the application remembers his session. Users can post photos from the camera or gallery, change their profile picture and like other users' posts. Also, I can see all likes and comments on a post, comment on other users' posts, and like comments. They can edit their profile, view the profiles of other registered users and have the ability to delete their own posts and comments."
                listItem={["HTML", "CSS", "JavaScript (OOP)"]}
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
                des="This weather app provides dynamic weather data like temperature, minimum and maximum temperature etc. It also adjusts the background image according to the entered location and displays a dynamic weather icon according to the current status. The application provides basic information such as the feeling of temperature, humidity, pressure and wind speed. Also, it does not accept an empty input and allows the display of the time in the next 24 hours, seven days and one month."
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
