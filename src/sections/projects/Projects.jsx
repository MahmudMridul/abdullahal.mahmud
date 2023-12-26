import React from "react";
import ProjectItem from "./ProjectItem";
import { useSelector } from "react-redux";

export default function Projects() {
   const projects = useSelector((store) => store.app.projects);
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold">Projects</h5>
         <ul>
            {projects.map((project, index) => {
               return <ProjectItem key={index} project={project} />;
            })}
         </ul>
      </section>
   );
}
