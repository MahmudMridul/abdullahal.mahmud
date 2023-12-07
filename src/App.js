import React from 'react';
import Overview from './sections/Overview';
import ExperienceList from './sections/experience/ExperienceList';
import Skills from './sections/skills/Skills';
// change tailwind from dev dependencies to dependencies
export default function App() {
   return (
      <main className="container max-w-5xl py-4 px-16 font-nunito bg-slate-100 shadow-2xl">
         <Overview />
         <ExperienceList />
         <Skills />
      </main>
   )
}
