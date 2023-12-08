import React from "react";
import { projects } from "../../data/data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
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
