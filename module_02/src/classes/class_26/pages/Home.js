import React from 'react'
import { useHistory } from 'react-router-dom'

function Home(){

    let history = useHistory(); 

    function handleButton(){
        history.replace('/about')
    }

    return <>
        <h4>Home</h4>
        <p>Welcome to my page!</p>
        <button onClick={handleButton}>About Page</button>
    </>
}

export default Home