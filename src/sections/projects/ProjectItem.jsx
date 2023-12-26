import React from "react";
import Badge from "../../components/Badge";

export default function ProjectItem({ project }) {
   const { name, source, detail, link, tech } = project;
   return (
      <li className="mt-4">
         <span className="text-lg font-bold">{name}</span>

         {source !== "Personal" ? (
            <span className="text-lg font-bold"> - {source}</span>
         ) : null}

         <p>{detail}</p>

         <span className="text-lg font-bold">Technogolies: </span>

         {tech.map((name, index) => {
            return <Badge key={index} text={name} />;
         })}

         {link !== "" ? (
            <div className="text-lg font-bold underline underline-offset-4">
               <a href={link} target="_blank" rel="noreferrer">
                  Link
               </a>
            </div>
         ) : null}
      </li>
   );
}
