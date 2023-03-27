import React from 'react';

export const SkillCard = (props) => {
    return (
        <div className="card my-3 card-width">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">
                    {
                        props.value.map((skill, index) => {
                            return(
                                <span 
                                    className="badge rounded-pill text-bg-light mx-1" 
                                    key={index}
                                >
                                    {skill}
                                </span>
                            );
                        })
                    }
                </p>
            </div>
        </div>
    );
}
