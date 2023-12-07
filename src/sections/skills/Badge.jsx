import React from "react";

export default function Badge({ text }) {
   return (
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mx-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
         {text}
      </span>
   );
}
