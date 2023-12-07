import React from "react";
import { experiences } from "../../data/data";
import Experience from "./Experience";

export default function ExperienceList() {
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold text-center">Experience</h5>
         {experiences.map((experience, index) => {
            return <Experience key={index} experience={experience} />;
         })}
      </section>
   );
}
