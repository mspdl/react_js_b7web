import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <>
        <header>
            <h1>My Cool Site</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/private-page'>Private Page</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
        <hr />
    </>
}

export default Header