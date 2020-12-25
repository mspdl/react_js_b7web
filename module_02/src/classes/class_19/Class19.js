import React, { useEffect, useState } from 'react';

document.title = "Module 02 - Class 19"

function Class19() {

    const [name, setName] = useState(localStorage.getItem('name'))

    function setNameLocalStorage(){
        localStorage.setItem('name', name)
    }

    useEffect(setNameLocalStorage, [name])

    return <>
        <h1>{name}</h1>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
    </>

}

export default Class19