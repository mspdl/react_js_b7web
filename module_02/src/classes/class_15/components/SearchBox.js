import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const InputText = styled.input`
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 300px;
    margin-bottom: 5px;
`

function SearchBox(props) {

    const [text, setText] = useState('')

    function updateSearchText() {
        if (text) {
            props.onChangeText(text)
        }
    }

    useEffect(updateSearchText, [text])

    return <>
        <InputText
            type='text'
            value={text}
            onChange={(e) => { setText(e.target.value) }}
            placeholder={props.defaultPhrase ?? 'Type something...'}
        />
    </>
}

export default SearchBox