import React, { useState } from 'react'
import PhraseButton from './components/PhraseButton'
import SearchBox from './components/SearchBox'

document.title = "Module 02 - Class 15"

function Class15() {

    const [searchText, setSearchText] = useState('')
    const [phrase, setPhrase] = useState('Default Phrase. Click to change!')

    function handleSearchInput(newText) {
        setSearchText(newText)
    }

    function updateButton(newPhrase){
        setPhrase(newPhrase)
    }

    return <>
        <h1> Task List</h1>

        <SearchBox
            defaultPhrase='Search...'
            onChangeText={handleSearchInput}
        />

        <hr />
        <b>Searched text:</b> {searchText}
        <br />

        <SearchBox
            defaultPhrase={searchText}
        />
        <h1>Exercise by myself</h1>
        <PhraseButton
            onButtonClick={updateButton}
        />
        <p>{phrase}</p>
    </>
}

export default Class15