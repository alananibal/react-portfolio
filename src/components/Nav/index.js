import React from "react";


function Nav({ currentPage, handlePageChange }) {
    return (
        <nav class="border border-primary">
            <ul  class="nav">
                <li>
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
                </li>


                <li><a href="#project"
                onClick={() => handlePageChange('Project')}
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                >Projects</a></li>
                
                
                <li><a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;