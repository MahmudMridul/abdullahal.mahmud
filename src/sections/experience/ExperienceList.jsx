import React from "react";
import Experience from "./Experience";
import { useSelector } from "react-redux";

export default function ExperienceList() {
   const experiences = useSelector((store) => store.app.experiences);
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold">Experience</h5>
         {experiences.map((experience, index) => {
            return <Experience key={index} experience={experience} />;
         })}
      </section>
   );
}
