import React from "react";

export default function EducationItem({ education }) {
   const { degree, institution, major, cgpa, time } = education;
   return (
      <li className="mt-4 font-medium">
         <span>{degree}</span>
         {major !== "" ? <span> in {major}</span> : null}
         <span> || {institution}</span>
         <span> || CGPA {cgpa}</span>
         <span> || {time} </span>
      </li>
   );
}
