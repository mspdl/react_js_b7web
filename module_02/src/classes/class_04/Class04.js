import React from 'react'

// First exercise
/*
function Welcome(props) {
    return <h1>Hello, {props.name}! You're {props.age} years old.</h1>
}

function Class04() {
    return <>
        <Welcome name='Morgan' age='31' />
        <Welcome name='Peter' age='44' />
        <Welcome name='Rafa' age='26'/>
    </>
}
*/

function Avatar(props) {
    return <>
        <img src={props.user.url} alt={props.user.name} />
        <br />
        <span>{props.user.name}</span>
    </>
}

function Class04() {

    let user = {
        name: 'Morgan',
        url: 'https://www.google.com.br/google.jpg'
    }
    return <>
        <Avatar user={user}/>
    </>
}

export default Class04