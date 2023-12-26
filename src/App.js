import React, { useEffect } from 'react';
import About from './sections/about/About';
import ExperienceList from './sections/experience/ExperienceList';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Certifications from './sections/certifications/Certifications';
import Education from './sections/education/Education';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './appSlice';
import Spinner from './components/Spinner';
// change tailwind from dev dependencies to dependencies
export default function App() {
   const dispatch = useDispatch();
   const isLoading = useSelector(store => store.app.isLoading);
   useEffect(() => {
      dispatch(getData());
   }, [])

   return (
      <main className="container max-w-5xl py-4 sm:px-4 md:px-16 font-nunito bg-slate-100 shadow-2xl">
         {isLoading ? <Spinner /> :
            <>
               <About />
               <ExperienceList />
               <Skills />
               <Projects />
               <Certifications />
               <Education />
            </>
         }
      </main>
   )
}
