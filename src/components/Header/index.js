import React from 'react';

function Header(props) {
    return(
        <header class="background-primary">
            <h1 class="display-1 text-white bg-primary px-3">Alan Anibal De Souza Ramos</h1>
            {props.children}
        </header>
    );
}

export default Header;