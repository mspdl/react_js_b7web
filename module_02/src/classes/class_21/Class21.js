import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

document.title = "Module 02 - Class 21"

function Class21() {

    return <>
        <BrowserRouter>
            <h1>My Cool Site</h1>
            <ul>
                <li><a href='/'>Home (Update Whole Page)</a></li>
                <li><a href='/about'>About (Update Whole Page)</a></li>
                <li><Link to='/'>Home (Update Just What You Need)</Link></li>
                <li><Link to='/about'>About (Update Just What You Need)</Link></li>
            </ul>
        </BrowserRouter>
    </>

}

export default Class21