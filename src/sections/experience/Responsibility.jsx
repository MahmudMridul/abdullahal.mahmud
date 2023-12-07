import React from "react";
import Badge from "../../components/Badge";

export default function Responsibility({ responsibility }) {
   const { detail, tech } = responsibility;
   return (
      <li className="mb-3">
         <p>{detail}</p>
         <span className="font-semibold"> Technologies - </span>
         {tech.map((name, index) => {
            return <Badge key={index} text={name} />;
         })}
      </li>
   );
}
