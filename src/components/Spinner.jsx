import React from "react";

export default function Spinner() {
   return (
      <div className="z-10 h-screen flex justify-center items-center">
         <div className="relative">
            <div
               className="w-14 h-14 rounded-full absolute
                   border-8 border-solid border-gray-200"
            ></div>

            <div
               className="w-14 h-14 rounded-full animate-spin absolute
                   border-8 border-solid border-gray-900 border-t-transparent"
            ></div>
         </div>
      </div>
   );
}
