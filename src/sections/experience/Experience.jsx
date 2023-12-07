import React from "react";
import ResponsibilityList from "./ResponsibilityList";

export default function Experience({ experience }) {
   const { role, company, timeSpan, responsibilities } = experience;
   return (
      <div>
         <h5 className="mt-3 text-xl font-semibold">
            {role} @ {company} || {timeSpan}
         </h5>
         <ResponsibilityList list={responsibilities} />
      </div>
   );
}
