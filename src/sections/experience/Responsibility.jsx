import React from "react";

export default function Responsibility({ responsibility }) {
   const { detail, tech } = responsibility;
   return (
      <li className="mb-3">
         <p>{detail}</p>
         <span className="font-semibold"> Technologies - </span>
         {tech}
      </li>
   );
}
