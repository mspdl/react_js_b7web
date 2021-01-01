import React from 'react';
import { Link } from 'react-router-dom';
import isLogged from '../../../helpers/AuthHandler';
import { HeaderArea } from './styled.js';

function Header() {

    let logged = isLogged();

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
                        {!logged && <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                            <li>
                                <Link to='/login' className='add-ad-button'>Add an ad</Link>
                            </li>
                        </>}
                        {logged && <>
                            <li>
                                <Link to='/my-account'>My Account</Link>
                            </li>
                            <li>
                                <Link to='/logout'>Logout</Link>
                            </li>
                            <li>
                                <Link to='/post-an-add' className='add-ad-button'>Add an ad</Link>
                            </li>
                        </>}
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    </>
}

export default Header