import React from "react";
import EducationItem from "./EducationItem";
import { useSelector } from "react-redux";
export default function Education() {
   const educations = useSelector((store) => store.app.educations);
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold underline underline-offset-8">
            Education
         </h5>
         <ul>
            {educations.map((edu, index) => {
               return <EducationItem key={index} education={edu} />;
            })}
         </ul>
      </section>
   );
}
