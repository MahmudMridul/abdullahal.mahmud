import React from 'react';

export const Contact = (props) => {

    const contact = props.contact;

    return (
        <section className='container-fluid my-5' id='contact'>
            <div className='row my-1 shadow-sm py-2'>
                <div className='col-sm-12 fs-3 fw-semibold text-center'>
                    Get in touch!
                </div>
            </div>

            <div className='row my-3 py-2 d-flex flex-row justify-content-center'>
                {
                    Object.entries(contact).map((obj, index) => {
                        return(
                            <div 
                                className='col-sm-1 d-flex justify-content-center'
                                key={index}
                            >
                                <a href={obj[1].link}>
                                    <img 
                                        className='contact-img'
                                        src={process.env.PUBLIC_URL + '/' + obj[1].img} 
                                        alt={obj[1].link}
                                    />
                                </a>
                                
                            </div>
                        );
                    })
                }
                
            </div>

        </section>
    );
}
