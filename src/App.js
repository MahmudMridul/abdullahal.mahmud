import React from 'react';
import Overview from './sections/Overview';
import ExperienceList from './sections/experience/ExperienceList';
// change tailwind from dev dependencies to dependencies
export default function App() {
   return (
      <main className="container max-w-5xl p-4 font-nunito bg-slate-100 shadow-2xl">
         <Overview />
         <ExperienceList />
      </main>
   )
}
