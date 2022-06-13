import React from 'react';

function Header(props) {
    return(
        <header>
            <h1>Alan Anibal De Souza Ramos</h1>
            {props.children}
        </header>
    );
}

export default Header;