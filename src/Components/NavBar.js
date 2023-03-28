import React from 'react';

export const NavBar = (props) => {

    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://mahmudmridul.github.io/abdullahal.mahmud/">{props.name}</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#about" onClick={handleLinkClick}>About</a>
                        <a className="nav-link" href="#experience" onClick={handleLinkClick}>Experience</a>
                        <a className="nav-link" href="#skills" onClick={handleLinkClick}>Skills</a>
                        <a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
