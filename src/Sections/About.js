import React from 'react';

export const About = (props) => {

    const education = props.education;
    const bsc = education[0];
    
    return (
        <section className='container-fluid my-3' id='about'>
            <div className='row my-1'>
                <div className='col-sm-12 fs-1 fw-bolder text-center'>
                    Hi
                </div>
            </div>

            <div className='row my-1'>
                <div className='col-sm-12 fs-3 fw-semibold text-center'>
                    I'm Abdullah, a Software Engineer
                </div>
            </div>

            <div className='row my-4'>
                <div className='col-sm-12 fs-3 fw-semibold text-center'>
                    <img 
                        src={process.env.PUBLIC_URL + 'LinkedIn_profile_photo.jpg'} 
                        alt="Abdullah"
                        className='rounded-circle profile-img-hw'
                        style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }}
                    />
                </div>
            </div>

            <div className='row my-1'>
                <div className='col-sm-12 fs-5 fw-normal text-center'>
                    {props.overview} I got my {bsc.degree} degree from {bsc.institution} in {bsc.major} in the year 2021.  
                </div>
            </div>
        </section>
    );
}
