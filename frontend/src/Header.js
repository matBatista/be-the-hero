import React from 'react';

// colocar o export default antes de fuction define por padrao que ele vai ser usar.
export default function Header({children}) {
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// export default Header;