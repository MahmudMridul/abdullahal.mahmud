import React from "react";
import { useSelector } from "react-redux";

export default function About() {
   const { basicInfo, contacts } = useSelector((store) => store.app);
   const { name, designation, company, timeSpan } = basicInfo;

   return (
      <header>
         <h4 className="text-5xl text-center mt-7 font-bold">{name}</h4>
         <h5 className="text-2xl text-center mt-2 font-semibold">
            {designation} @ {company} || {timeSpan}
         </h5>
         <div className="mt-5 flex justify-center content-center">
            {contacts.map((contact, index) => {
               if (contact.link.length > 0) {
                  return (
                     <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img
                           src={contact.src}
                           alt={contact.alt}
                           className="w-10 h-10 mx-5"
                        ></img>
                     </a>
                  );
               } else {
                  return (
                     <>
                        <img
                           key={index}
                           src={contact.src}
                           alt={contact.alt}
                           className="w-10 h-10 mx-5"
                        ></img>
                        {/* <span className="font-bold pt-2">{contact.text}</span> */}
                     </>
                  );
               }
            })}
         </div>
      </header>
   );
}
