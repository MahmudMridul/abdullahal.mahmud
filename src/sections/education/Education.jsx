import React from "react";
import { educations } from "../../data/data";
import EducationItem from "./EducationItem";
export default function Education() {
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold">Education</h5>
         <ul>
            {educations.map((edu, index) => {
               return <EducationItem key={index} education={edu} />;
            })}
         </ul>
      </section>
   );
}
