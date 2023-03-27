import React from 'react';

export const Spinner = () => {
    return (
        <div className='full-height d-flex align-items-center justify-content-center'>
            <div
                className="spinner-border text-primary"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}
