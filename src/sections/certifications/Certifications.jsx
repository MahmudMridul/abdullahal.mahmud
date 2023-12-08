import React from "react";
import { certifications } from "../../data/data";
import CertificationItem from "./CertificationItem";

export default function Certifications() {
   return (
      <section>
         <h5 className="mt-20 text-2xl font-bold">Certifications</h5>
         <ul>
            {certifications.map((cert, index) => {
               return <CertificationItem key={index} certification={cert} />;
            })}
         </ul>
      </section>
   );
}
