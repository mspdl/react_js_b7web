import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <>
        <header>
            <h1>My Cool Site</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/category?categoryName=sports'>Sports</Link></li>
                    <li><Link to='/category?categoryName=news'>News</Link></li>
                    <li><Link to='/category?categoryName=travel'>Travel</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                </ul>
            </nav>
        </header>
        <hr />
    </>
}

export default Header