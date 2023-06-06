import React from 'react'
import SectionTitle from './SectionTitle'
import photoDashboard from "../public/assets/dashboard.jpg"
import ProjectCard from './ProjectCard';


const  Projects = () => {
  return (
    <div
      id="project"
      className="max-w-contentContainer mx-auto py-10 mdl:px-24 xl:px-4 px-2"
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
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2  md:px-20 xl:px-10 lg:grid-cols-3 gap-10 place-items-center">
          <ProjectCard
            img={photoDashboard}
            title="Amazon Clone"
            link="https://amazonclone.reactbd.com/"
          />
          <ProjectCard
            img={photoDashboard}
            title="Cyber Security"
            link="https://reactbd.com/"
          />
          <ProjectCard
            img={photoDashboard}
            title="Cyber Security"
            link="https://blog.reactbd.com/"
          />
          <ProjectCard
            img={photoDashboard}
            title="Noor Shopping"
            link="https://orebishopping.reactbd.com/"
          />
          <ProjectCard
            img={photoDashboard}
            title="Dynamic Portfolio"
            link="https://amazonclone.reactbd.com/"
          />

          <ProjectCard
            img={photoDashboard}
            title="Dashboard"
            link="https://orebishopping.reactbd.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default  Projects