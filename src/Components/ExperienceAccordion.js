import React from 'react';

export const ExperienceAccordion = (props) => {

    const experiences = props.experience;
    
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">

            {
                experiences.map((exp, index) => {
                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`flush-heading${index+1}`}>
                                <button
                                    className="accordion-button collapsed fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse${index+1}`}
                                    aria-expanded="false"
                                    aria-controls={`flush-collapse${index+1}`}
                                >
                                    {exp.role} | {exp.company} | {exp.timeSpan}
                                </button>
                            </h2>
                            <div
                                id={`flush-collapse${index+1}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`flush-heading${index+1}`}
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    {exp.responsibility}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
