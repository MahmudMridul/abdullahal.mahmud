import React from "react";
import { skills } from "../../data/data";
import SkillCategory from "./SkillCategory";

export default function Skills() {
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold">Skills</h5>
         {Object.entries(skills).map(([prop, value], index) => {
            return <SkillCategory key={index} skill={value} />;
         })}
      </section>
   );
}
