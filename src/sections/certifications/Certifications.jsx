import React from "react";
import CertificationItem from "./CertificationItem";
import { useSelector } from "react-redux";

export default function Certifications() {
   const certifications = useSelector((store) => store.app.certifications);
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold underline underline-offset-8">
            Certifications
         </h5>
         <ul>
            {certifications.map((cert, index) => {
               return <CertificationItem key={index} certification={cert} />;
            })}
         </ul>
      </section>
   );
}
