import React from 'react'
import './Class05.css'

function Avatar(props) {
    // return <div style={{backgroundColor:'red', padding:'20px'}}>
    return <div className='avatar'>
        <img src={props.user.url} alt={props.user.name} />
        <br />
        <span>{props.user.name}</span>
    </div>
}

function Class05() {
    let user = {
        name: 'Morgan',
        url: 'https://avatars1.githubusercontent.com/u/31082300?s=460&u=25a7a359042ef55e6c20af331f50aa3dc8e0c6ec&v=4'
    }
    return <>
        <Avatar user={user} />
    </>
}

export default Class05