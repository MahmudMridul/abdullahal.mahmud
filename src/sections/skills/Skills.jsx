import React from "react";
import SkillCategory from "./SkillCategory";
import { useSelector } from "react-redux";

export default function Skills() {
   const skills = useSelector((store) => store.app.skills);
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold underline underline-offset-8">
            Skills
         </h5>
         {Object.entries(skills).map(([prop, value], index) => {
            return <SkillCategory key={index} skill={value} />;
         })}
      </section>
   );
}
