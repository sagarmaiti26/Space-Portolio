import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Project1.png"
          title="Wanderlust"
          description="Wanderlust is a property rental website which enables users to create accounts, add their property for listings,view them on an interactive map, and leave reviews"
        />
        <ProjectCard
          src="/Project2.png"
          title="Portfolio"
          description="A Portfolio features captivating animations and seamless transitions. Integrated with an email API for easy communication, it's responsive across devices."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A portfolio is inspired by the awe-inspiring beauty of space exploration and features captivating animations and seamless transitions"
        />
      </div>
    </div>
  );
};

export default Projects;
