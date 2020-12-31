import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled.js'

function Header() {
    return <>
        <HeaderArea>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <span className='logo-1'>O</span>
                        <span className='logo-2'>L</span>
                        <span className='logo-3'>Z</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to=''>Login</Link>
                        </li>
                        <li>
                            <Link to=''>Register</Link>
                        </li>
                        <li>
                            <Link to='' className='add-ad-button'>Add an ad</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    </>
}

export default Header