import React from 'react';
import { SkillCard } from '../Components/SkillCard';

export const Skills = (props) => {

    const hardSkills = props.hardSkills;
    const otherSkills = props.otherSkills;

    return (
        <section className='container-fluid my-5' id='skills'>
            <div className='row my-1 shadow-sm py-2'>
                <div className='col-sm-12 fs-3 fw-semibold text-center'>
                    Skills
                </div>

            </div>

            <div className='row my-3 d-flex flex-row justify-content-evenly'>
                {
                    Object.entries(hardSkills).map(([key, value]) => {
                        return(
                            <div 
                                className='col fs-5 fw-normal text-start d-flex justify-content-evenly'
                                key={key}
                            >
                                <SkillCard
                                    title={key}
                                    value={value}
                                />
                            </div>
                            
                        );
                    })
                }


                <div 
                    className='col fs-5 fw-normal text-start d-flex justify-content-center'
                >
                    <SkillCard
                        title='Others'
                        value={otherSkills}
                    />
                </div>
                            

            </div>
        </section>
    );
}
