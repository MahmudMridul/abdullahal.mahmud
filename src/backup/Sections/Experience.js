import React from 'react';
import { ExperienceAccordion } from '../Components/ExperienceAccordion';

export const Experience = (props) => {

    const experience = props.experience;

    return (
        <section className='container-fluid my-5' id='experience'>
            <div className='row my-1 shadow-sm py-2'>
                <div className='col-sm-12 fs-3 fw-semibold text-center'>
                    Working Experience
                </div>

            </div>

            <div className='row my-3'>
                <div className='col-sm-12 fs-5 fw-normal text-start'>
                    <ExperienceAccordion
                        experience={experience}
                    />
                </div>
            </div>
        </section>
    );
}
