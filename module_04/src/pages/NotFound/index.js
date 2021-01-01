import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return <>
        <h3>Error 404 - Page Not Found</h3>
        <Link to='/'>Back Home</Link>
    </>
}

export default NotFound