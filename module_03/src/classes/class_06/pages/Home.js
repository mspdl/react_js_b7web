import React from 'react';
import { useSelector } from 'react-redux';

function Home() {

    const user = useSelector(state => state.user)

    return <>
        <h4>Home Page</h4>
        Current Name: {user.name}
        <br />
        Current Count: {user.count}
        <br />
    </>
}


export default Home