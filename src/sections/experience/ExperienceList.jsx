import React from "react";
import Experience from "./Experience";
import { useSelector } from "react-redux";
import { calculateExp } from "../../appUtils";

export default function ExperienceList() {
   const experiences = useSelector((store) => store.app.experiences);
   const exp = calculateExp("2021-08-01");
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold underline underline-offset-8">
            Experience
         </h5>
         <span className="text-base font-bold">{exp}</span>
         {experiences.map((experience, index) => {
            return <Experience key={index} experience={experience} />;
         })}
      </section>
   );
}
