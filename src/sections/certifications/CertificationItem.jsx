import React from "react";

export default function CertificationItem({ certification }) {
   const { name, link, platform } = certification;
   return (
      <li className="mt-4 font-medium underline underline-offset-4 text-sky-500 cursor-pointer">
         <span>
            <a href={link} target="_blank" rel="noreferrer">
               {name}
            </a>
         </span>{" "}
         <span> ({platform}) </span>
      </li>
   );
}
