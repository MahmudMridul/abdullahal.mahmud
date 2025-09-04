import React from "react";
import Responsibility from "./Responsibility";

export default function ResponsibilityList({ list }) {
   return (
      <ul className="list-none text-justify text-lg">
         {list.map((responsibility, index) => {
            return (
               <Responsibility key={index} responsibility={responsibility} />
            );
         })}
      </ul>
   );
}
