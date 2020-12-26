import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <>
        <header>
            <h1>My Cool Site</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/category/sports'>Sports</Link></li>
                    <li><Link to='/category/news'>News</Link></li>
                    <li><Link to='/category/travel'>Travel</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
        <hr />
    </>
}

export default Header