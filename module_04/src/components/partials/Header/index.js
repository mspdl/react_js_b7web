import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Header() {

    return <>
        <div className='header-area'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <span className='logo-1'>O</span>
                        <span className='logo-2'>L</span>
                        <span className='logo-3'>Z</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Header