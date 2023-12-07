import React from "react";
import Badge from "../../components/Badge";

export default function SkillCategory({ skill }) {
   const { title, tech } = skill;
   return (
      <div>
         <h5 className="mt-5 text-xl font-semibold">{title}</h5>
         {tech.map((name, index) => {
            return <Badge key={index} text={name} />;
         })}
      </div>
   );
}
