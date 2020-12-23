import React from 'react'
import SearchBox from './components/SearchBox'

document.title = "Module 02 - Class 14"

function Class14() {

    return <>
        <h1> Task List</h1>
        <SearchBox defaultPhrase='Search...'/><br />
        <SearchBox defaultPhrase='Type your name'/><br />
        <SearchBox />
    </>
}

export default Class14