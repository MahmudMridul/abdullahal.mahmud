import React from 'react';
import { NavBar } from '../Components/NavBar';
import { About } from '../Sections/About';
import { Contact } from '../Sections/Contact';
import { Experience } from '../Sections/Experience';
import { Skills } from '../Sections/Skills';

export const Layout = (props) => {

    const data = props.data;
    const overview = data.overview;
    const education = data.education;
    const experience = data.experience;
    const hardSkills = data.skills[0].hardSkills[0];
    const otherSkills = data.skills[0].others;
    const contact = data.contact;

    return (
        <main className="container shadow-lg">

            <div className='row'>
                <div className='col-sm-12'>
                    <NavBar name={props.data.name}/>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    <About
                        overview={overview}
                        education={education}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    <Experience
                        experience={experience}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    <Skills
                        hardSkills={hardSkills}
                        otherSkills={otherSkills}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    <Contact
                        contact={contact}
                    />
                </div>
            </div>
            
        </main>

    );
}
